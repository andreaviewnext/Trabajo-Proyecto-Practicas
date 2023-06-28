import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { Observable, of, combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  //si no lo devuelvo como un array, puede que se pase por referencia y lo mejor es crear una copia y no hay cambios en el inicial 
  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null> {
    if (!codigo) {
      return of(null)
    }
    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall> {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,cca3`;
    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaisSmall[]> {
    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach(codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    })

    return combineLatest(peticiones);
  }
}

