import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    //cuando alguien entre en auth, este carga sus hijos 
    loadChildren: ()=> import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'heroes',
    //cuando alguien entre en heroes, este carga sus hijos 
    loadChildren: ()=> import('./heroes/heroes.module').then( m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '404'
  }
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
