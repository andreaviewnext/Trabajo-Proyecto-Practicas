import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { InicioModule } from './inicio/inicio.module';
import { TiempoModule } from './tiempo/tiempo.module';
import { RouterModule } from '@angular/router';
import { CalculadoraMejoradaModule } from './calculadora-mejorada/calculadora-mejorada.module';
import { PaisesModule } from './paises/paises.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalculadoraModule,
    CalculadoraMejoradaModule,
    InicioModule,
    SharedModule,
    TiempoModule,
    PaisesModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
