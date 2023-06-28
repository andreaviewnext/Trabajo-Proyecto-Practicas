import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //y se usa los get para obtener informacion
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroesPorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  //se usa post para crear uno nuevo
  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  //se usa put para actualizar
  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    if (!heroe.id) throw Error('Heroe id is required');
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  //usamos el delete para borrar 
  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
