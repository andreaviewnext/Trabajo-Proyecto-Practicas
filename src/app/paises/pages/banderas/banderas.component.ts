import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent implements OnInit {

  pais!: Paises[];

  constructor(private paisService: PaisService) { }

  informacion: boolean = false;
  paisMostrado!: Paises;

  ngOnInit(): void {
    this.paisService.buscarPais()
      .subscribe(paises => {
        this.pais = paises
      });
  }
  mostrarInformacion(pais: Paises) {
    //para mostrar informacion
    this.informacion = true;
    this.paisMostrado = pais;
console.log(pais);

  }

  volverBanderas() {
    this.informacion = false;
  }

}
