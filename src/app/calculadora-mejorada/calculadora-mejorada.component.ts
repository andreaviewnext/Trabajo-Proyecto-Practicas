import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-mejorada',
  templateUrl: './calculadora-mejorada.component.html',
  styleUrls: ['./calculadora-mejorada.component.css'],
})
export class CalculadoraMejoradaComponent {

  num1: string = '';
  num2: string = '';
  valorDeEntrada: string = '';
  operActual: string = '';
  resultado: number = 0;
  ultimaOperacion: string = '';

  //introduce los operandos que se quieren usar para realizar la operacion
  agregarNumero(numero: string): void {
    if (this.operActual === '') {
      this.num1 += numero;
      this.valorDeEntrada = this.num1;
      console.log('primer num:', this.valorDeEntrada);
    }
    else {
      this.num2 += numero;
      this.valorDeEntrada = this.num2;
      console.log('segundo num:', this.valorDeEntrada);
    }
  }

  //actualiza el valor de la operacion que se desea realizar 
  operacion(oper: string) {
    if (this.num1 === '') {
      this.valorDeEntrada = 'ERROR'
    }

    if (this.operActual !== '') {
      this.calcular();
    }
    this.operActual = oper;
    this.ultimaOperacion = oper;

    console.log('operando:', this.operActual);
  }

  //limpiar todas las variables de nuestra calculadora 
  limpiar() {
    this.num1 = '';
    this.num2 = '';
    this.operActual = '';
    this.resultado = 0;
    this.valorDeEntrada = '';
  }

  //borra el ultimo valor insertado
  borrarUltimo(): void {
    if (this.operActual === '') {
      this.num1 = this.num1.slice(0, -1);
      this.valorDeEntrada = this.num1;
      console.log(this.valorDeEntrada);
    } else {
      this.num2 = this.num2.slice(0, -1);
      this.valorDeEntrada = this.operActual + this.num2;
      console.log(this.valorDeEntrada);
    }
  }

  agregarDecimal(): void {
    if (this.operActual === '') {
      if (this.num1.indexOf('.') === -1) {
        this.num1 += '.';
        this.valorDeEntrada = this.num1;
      }
    } else {
      if (this.num2.indexOf('.') === -1) {
        this.num2 += '.';
        this.valorDeEntrada = this.operActual + this.num2;
      }
    }
  }



  //funcion para calcular las diferentes operaciones
  calcular() {
    if (this.operActual !== '' && this.num2 !== '') {
      switch (this.operActual) {
        case '+':
          this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
          this.valorDeEntrada = this.resultado.toString();
          console.log('resultado de la suma:', this.valorDeEntrada);
          break;
        case '-':
          this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
          this.valorDeEntrada = this.resultado.toString();
          console.log('resultado de la resta:', this.valorDeEntrada);
          break;
        case '*':
          this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
          this.valorDeEntrada = this.resultado.toString();
          console.log('resultado de la multiplicacion:', this.valorDeEntrada);
          break;
        case '/':
          this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
          this.valorDeEntrada = this.resultado.toString();
          console.log('resultado de la division:', this.valorDeEntrada);
          break;
      }
      

      if (this.valorDeEntrada.toString() === 'NaN') {
        this.valorDeEntrada = 'ERROR';
      }

      this.operActual = this.ultimaOperacion;
      this.num1 = this.resultado.toString();
      this.num2 = '';
      this.operActual = '';
    }
    else {
      this.valorDeEntrada = 'ERROR';
    }
  }

}
