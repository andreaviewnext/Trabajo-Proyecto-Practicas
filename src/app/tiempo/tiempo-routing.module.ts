import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiempoComponent } from './pages/tiempo/tiempo.component';
import { InformacionComponent } from './pages/informacion/informacion.component';


const routes: Routes = [
    {
        path: '',

        children: [
            {
                path: '',
                component: TiempoComponent
            },
            {
                path: 'informacion/:id/:i',
                component: InformacionComponent
            },
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
export class TiempoRoutingModule { }