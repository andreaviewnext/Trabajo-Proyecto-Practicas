import { Injectable } from '@angular/core';
import { Paises } from '../interfaces/paises.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  buscarPais(): Observable<Paises[]> {
    return this.http.get<Paises[]>(this.apiUrl);
  }
}
