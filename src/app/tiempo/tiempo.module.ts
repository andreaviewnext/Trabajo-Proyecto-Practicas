import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiempoComponent } from './pages/tiempo/tiempo.component';
import { TiempoRoutingModule } from './tiempo-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DetallesHorasComponent } from './pages/detalles-horas/detalles-horas.component';



@NgModule({
  declarations: [
    TiempoComponent,
    InformacionComponent,
    DetallesHorasComponent,
  ],
  imports: [
    CommonModule,
    TiempoRoutingModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    TiempoComponent,
    InformacionComponent
   
  ]
})
export class TiempoModule { }
