import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports:[
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    PrimeNgModule
  ]
})
export class CalculadoraModule { }
