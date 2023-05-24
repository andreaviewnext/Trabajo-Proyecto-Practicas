import { Component, Input } from '@angular/core';
import { Datos } from '../../interfaces/datos.interface';

@Component({
  selector: 'app-detalles-horas',
  templateUrl: './detalles-horas.component.html',
  styleUrls: ['./detalles-horas.component.css']
})
export class DetallesHorasComponent {

  @Input() datos: Datos[] = [];

}
