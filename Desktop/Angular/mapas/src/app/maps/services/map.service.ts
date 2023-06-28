import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';
import { DirectionsApiClient } from '../api/directionsApiClient';
import { DirectionsResponse, Route, Type } from '../interfaces/directions';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];

  constructor(private directionApi: DirectionsApiClient) { }

  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) {
      throw Error('el mapa no esta inicializado');
    }
    this.map?.flyTo({
      zoom: 14,
      center: coords
    });
  }

  createmarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw Error('mapa no inicializado');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${place.text}</h6>
          <span>${place.place_name}</span>
        `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map)

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;

    if (places.length === 0) return;
    //limites del mapa
    const bounds = new LngLatBounds();
    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    bounds.extend(userLocation);

    this.map.fitBounds(bounds, {
      padding: 200
    });
  }

  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    this.directionApi.get<DirectionsResponse>(`/${start.join(',')}; ${end.join(',')}`)
      .subscribe(resp => this.drawPolyLine(resp.routes[0]));
  }

  private drawPolyLine(route: Route) {
    console.log({ kms: route.distance / 1000, duration: route.duration / 60 });

    const coords = route.geometry.coordinates;
    const start = coords[0] as [number, number];

    const bounds = new LngLatBounds();
    coords.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
    })

    this.map?.fitBounds(bounds, {
      padding: 200
    });

    //polyline
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    //limpiar ruta previa 
    if (this.map?.getLayer('RouterString')) {
      this.map.removeLayer('RouterString');
      this.map.removeSource('RouterString');
    }


    this.map?.addSource('RouterString', sourceData);
    this.map?.addLayer({
      id: 'RouterString',
      type: 'line',
      source: 'RouterString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'black',
        "line-width": 3
      }
    });

  }


}
