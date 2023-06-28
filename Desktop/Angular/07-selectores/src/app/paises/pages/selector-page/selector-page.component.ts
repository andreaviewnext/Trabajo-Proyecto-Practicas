import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  })

  //llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  //fronteras: string[] = [];
  fronteras: PaisSmall[] = [];
  //UI
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          //esto lo que hace que cuando cambie de region el campo pais se actualice a vacio 
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        //switchMap(), que transforma el valor de la región en una llamada a getPaisesRegion() del servicio de paises. 
        //Este servicio es utilizado para obtener una lista de paises que corresponden a la región seleccionada.
        switchMap(region => this.paisesService.getPaisesRegion(region)),
      )
      //subscribe(), que asigna los resultados a la propiedad paises del componente actual. 
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });

    //cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos(pais ? pais[0]?.borders : []!))
      )
      .subscribe(paises => {
        //this.fronteras = pais ? pais[0]?.borders : [];
        this.fronteras = paises;
        this.cargando = false;
      });

  }

  //método para guardar los cambios de la región seleccionada 
  guardar() {
    console.log(this.miFormulario.value);
  }


}
