import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  //sirve para tomar un elemento HTML y utilizarlo como una propiedad corriente
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  longlat: [number, number] = [-6.012287599447483, 39.012000649706444];

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.longlat,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    //movimiento del mapa
    this.mapa.on('move', (ev) => {
      const target = ev.target;
      const { lng, lat } = target.getCenter();
      this.longlat = [lng, lat];
    });

  }

  zoomOut() {
    this.mapa.zoomOut();

  }

  zoomIn() {
    this.mapa.zoomIn();

  }

  zoomCambio(value: string) {
    this.mapa.zoomTo(Number(value));

  }
}
