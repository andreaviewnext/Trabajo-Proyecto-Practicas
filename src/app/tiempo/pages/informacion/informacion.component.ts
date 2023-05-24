import { Component, Input, OnInit } from '@angular/core';
import { Datos } from '../../interfaces/datos.interface';
import { TiempoService } from '../../service/tiempo.service';
import { DatosMun } from '../../interfaces/datosMun.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],

})
export class InformacionComponent implements OnInit {

  datos: Datos[] = [];
  i!: number;
  municipioActual!: DatosMun;
  //codigo del municipio 
  id!: string;

  constructor(private activateRoute: ActivatedRoute, private tiempoService: TiempoService, private router: Router) { }

  //metodo para rellenar con ceros a la izquierda para poder completar los codigos que se inician en cero
  rellenarConCeros(numero: string): string {
    return numero.padStart(5, '0');
  }

  goBack() {
    //this.router.navigate(['']);
    history.back();
  }

  ngOnInit(): void {
    if (this.activateRoute) {
      const snapshot = this.activateRoute.snapshot;
      if (snapshot) {
        const iParam = snapshot.paramMap.get('i');
        if (iParam) {
          this.i = +iParam;
        }

        this.activateRoute.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.rellenarConCeros(this.id));
        });

        this.tiempoService.obtenerMunicipio(this.rellenarConCeros(this.id)).subscribe(
          rest => {
            this.municipioActual = rest;
            this.tiempoService.obtenerDatosMunicipio(this.municipioActual.datos).subscribe(resp => {
              this.datos = resp;
              console.log(this.datos[0].prediccion.dia[0]);

            })
          }
        );
      }
    }
  }
}

