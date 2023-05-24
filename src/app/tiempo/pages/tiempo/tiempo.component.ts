import { Component, OnInit } from '@angular/core';
import { Datos } from '../../interfaces/datos.interface';
import { DatosMun } from '../../interfaces/datosMun.interface';
import { TiempoService } from '../../service/tiempo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  datosMunicipio: Datos[] = [];

  municipioActual!: DatosMun;
  nomMun: string = 'Santa Amalia';
  codMun: string = '';
  hayError: boolean = false;
  cargandoDatos: boolean = true;

  constructor(private tiempoService: TiempoService, private route: Router) { }

  ngOnInit(): void {
    //me cargar el metodo por defecto cuando este en la pagina de informacion
    this.buscar();

  }

  buscar() {
    this.hayError = false;

    //primero obtenemos el codigo del municipio que se ha buscado
    this.codMun = this.tiempoService.obtenerCodigoMunicipio(this.nomMun);
    //con el codigo obtenido se usa el obtener municipio, el cual usaremos para obtener los datos del municipio e ir actualizando la url cada
    // vez que se busca un municipio 
    this.tiempoService.obtenerMunicipio(this.codMun).subscribe(
      rest => {
        this.municipioActual = rest;
        this.tiempoService.obtenerDatosMunicipio(this.municipioActual.datos).subscribe(resp => {
          this.datosMunicipio = resp;
          this.cargandoDatos = false;
        })
      },
      (error) => {
        this.hayError = true;
      }
    )
    return false;
  }

}
