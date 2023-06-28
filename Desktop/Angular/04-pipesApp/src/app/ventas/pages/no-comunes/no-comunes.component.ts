import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Jorge';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Antonio'];
  clientesMapa =
    {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.'
    }

  //
  cambiarCliente() {
    this.nombre = 'Andrea';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();

  }

  //keyvalue pipe
  persona = {
    nombrePers: 'Alicia',
    edad: 24,
    direccion: 'Vivares, Badajoz'
  }

  //Json pipe
  heroes = [
    {
      nombre: 'Ironman',
      vuela: true
    },
    {
      nombre: 'vieda negra',
      vuela: false
    },
    {
      nombre: 'Thor',
      vuela: true
    },
  ]

  //Async pipe
  miObservable = interval( 5000 ); //0.1.2.3.4

  valorPromesa = new Promise( (resolve, reject) => {
setTimeout(() => {
  resolve( 'Tenemos data de promesa');
  
}, 3500);
  });
}
