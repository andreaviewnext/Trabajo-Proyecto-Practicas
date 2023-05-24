import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1: string = '';
  num2: string = '';
  operActual: string = '';
  resultado: number = 0;
  hayError: boolean = false;
  error: string = 'ERROR EN LOS PARÁMETROS';
  registro: string[] = [];

  //introduce los operandos que se quieren usar para realizar la operacion
  agregarNumero(numero: string): void {
    if (this.operActual === '') {
      this.num1 += numero;
      this.registro.push('Primer número:', this.num1);
    }
    else {
      this.num2 += numero;
      this.registro.push('Segundo número:', this.num2);
    }
  }

  //actualiza el valor de la operacion que se desea realizar 
  operacion(oper: string) {
    if (this.num1 === '') {
      this.hayError = true;
      this.registro.push(this.error);
      this.registro.push('Es necesario introducir un primer parámetro, empiece de nuevo la operación (pulse la tecla "C")');
    }
    else {
      this.operActual = oper;
      this.registro.push('Operador:', this.operActual);
    }

  }

  //limpiar todas las variables de nuestra calculadora 
  limpiar() {
    this.num1 = '';
    this.num2 = '';
    this.operActual = '';
    this.resultado = 0;
    this.hayError = false;
    this.registro = [];
  }

  //funcion para calcular el porcentaje
  calcularPorcentaje(valor: number, porcentaje: number): number {
    return (valor * porcentaje) / 100;
  }

  //funcion para calcular el exponencial de un numero
  calcularExponencial(base: number, exponente: number): number {
    return Math.round(Math.exp(exponente * Math.log(base)));
  }

  //funcion para calcular las diferentes operaciones
  calcular() {
    switch (this.operActual) {
      case '+':
        this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
        break;
      case '-':
        this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
        break;
      case '*':
        this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
        break;
      case '/':
        this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
        break;
      case '^':
        this.resultado = this.calcularExponencial(parseFloat(this.num1), parseFloat(this.num2));
        break;
      case '%':
        this.resultado = this.calcularPorcentaje(parseFloat(this.num1), parseFloat(this.num2));
        break;
    }
    if (this.resultado.toString() !== 'NaN') {
      this.registro.push('La solución es:', this.resultado.toString());
    }
    else {
      this.registro.push('Error en la solución, empiece de nuevo la operación (pulse la tecla "C")');
    }

    this.num1 = this.resultado.toString();
    this.num2 = '';
    this.operActual = '';
  }

}

