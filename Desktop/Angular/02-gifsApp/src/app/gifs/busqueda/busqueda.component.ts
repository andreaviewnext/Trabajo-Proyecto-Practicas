import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  //se pone ! para asegurar que el objeto no es nulo y siempre va a tener un valor 
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    //para controlar que no almacene vacios en el historial
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscarGifs(valor);
    //cuando damos a enter para buscar algo, se queda vacia el cuadrado de buscar
    this.txtBuscar.nativeElement.value = '';
  }

}
