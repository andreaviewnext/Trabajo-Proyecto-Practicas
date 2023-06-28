import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  longlat: [number, number] = [-6.012287599447483, 39.012000649706444];

  //arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.longlat,
      zoom: this.zoomLevel
    });

    this.leerLocalStorage();

    /* MARCADOR ESTATICO
    const maker = new mapboxgl.Marker()
    .setLngLat(this.longlat)
    .addTo(this.mapa)
    */
  }

  agregarMarcador() {

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.longlat)
      .addTo(this.mapa);

    //para añadir el nuevo marcador al arreglo de marcadores que es de tipo de la interfaz de los colores de marcadores
    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadoresLocalStorage();
    })
  }

  irMarcador(marker: mapboxgl.Marker) {

    this.mapa.flyTo({
      center: marker.getLngLat()
    });
  }

  guardarMarcadoresLocalStorage() {

    const lngLatArray: MarcadorColor[] = [];

    this.marcadores.forEach(m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArray.push({
        color: color,
        centro: [lng, lat]
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArray));
  }

  leerLocalStorage() {

    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArray: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArray.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      });

      //se actualiza la long y lat sin necesidad de crear otro marcador, simplemente con moverlo se guarda
      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      })

    });
  }

  borrarMarcador(i: number) {

    //para eliminar el marcador
    this.marcadores[i].marker?.remove();
    //para eliminarlo de mi arreglo de marcadores 
    this.marcadores.splice(i, 1);
    this.guardarMarcadoresLocalStorage();
  }

}
