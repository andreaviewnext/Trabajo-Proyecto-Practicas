import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanderasComponent } from './pages/banderas/banderas.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'banderas',
        component: BanderasComponent
      },
      {
        path: 'informacion/:id/:i',
        component: InformacionComponent
      },
      {
        path: '**',
        redirectTo: 'banderas'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
