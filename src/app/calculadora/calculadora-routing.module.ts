import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'calculadora',
                component: CalculadoraComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CalculadoraRoutingModule { }
