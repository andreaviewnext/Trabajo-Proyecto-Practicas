import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = 'andrea';
  nombreUpper: string = 'ANDREA';
  nombreCompleto: string = 'anDrEa niETo sAnChEz';

  fecha: Date = new Date(); //es el dia de hoy 
}
