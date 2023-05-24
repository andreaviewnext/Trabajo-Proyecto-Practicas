import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'inicio'
      },
      {
        label: 'Calculadora',
        icon: 'pi pi-fw pi-calculator',
        routerLink: 'calculadora'
      },
      {
        label: 'Calculadora-mejorada',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'calculadoraMejorada'

      },
      {
        label: 'Tiempo',
        icon: 'pi pi-fw pi-sun',
        routerLink: 'tiempo'
      },
      {
        label: 'RestCountries',
        icon: 'pi pi-fw pi-flag-fill',
        routerLink: 'paises'
      }
    ]
  }

}



