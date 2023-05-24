import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { BanderasComponent } from './pages/banderas/banderas.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BanderasComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    PrimeNgModule
  ],
  exports: [
    BanderasComponent,
    InformacionComponent
  ]
})
export class PaisesModule { }
