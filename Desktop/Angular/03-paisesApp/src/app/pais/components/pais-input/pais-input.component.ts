import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {


  //se pone on para identificar que es un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //debounce se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string='';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
       this.onDebounce.emit(valor)
      })
  }

  buscar() {
    //al usar onEnter estamos llamando al padre (buscar) por eso al presionar Enter cuando buscamos, nos sale los paises que coinciden con la busqueda
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);

  }

}
