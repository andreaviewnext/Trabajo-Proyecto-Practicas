import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiempoComponent } from './tiempo/pages/tiempo/tiempo.component';
import { InformacionComponent } from './tiempo/pages/informacion/informacion.component';
import { CalculadoraMejoradaComponent } from './calculadora-mejorada/calculadora-mejorada.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'

    },
    {
        path: 'calculadora',
        component: CalculadoraComponent
    },
    {
        path: 'inicio',
        component: InicioComponent

    },
    {
        //sus rutas hijas 
        path: 'tiempo',
        loadChildren: () => import('src/app/tiempo/tiempo.module').then(m => m.TiempoModule)
    },
    {
        path: 'calculadoraMejorada',
        component: CalculadoraMejoradaComponent
    },
    {
        //sus rutas hijas 
        path: 'paises',
        loadChildren: () => import('src/app/paises/paises.module').then(m => m.PaisesModule)
    },
    /*{
        path: '**',
        redirectTo: ''
    }*/
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
