import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraMejoradaComponent } from './calculadora-mejorada.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CalculadoraMejoradaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CalculadoraMejoradaComponent
  ]
})
export class CalculadoraMejoradaModule { }
