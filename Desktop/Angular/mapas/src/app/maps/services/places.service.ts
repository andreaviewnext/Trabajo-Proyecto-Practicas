
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    //doble !! quiere decir que no hay un valor y lo niego 
    return !!this.useLocation;
  }

  constructor(private placesApi: PlacesApiClient, private mapService: MapService) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);

        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();

        }
      )
    })

  }

  getPlacesByQuery(query: string = '') {

    if (query.length === 0) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if (!this.useLocation) throw Error('no hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.useLocation?.join(',')
      }
    })
      .subscribe(resp => {

        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createmarkersFromPlaces(this.places, this.useLocation!);
      })
  }


  deletePlaces() {
    this.places = [];
  }
}
