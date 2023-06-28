import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environmentt';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    //se pone de esta forma para asegurar que no se modifica la variable private que hemos definido anteriormente
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  registro(name: string, email: string, password: string){
    
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            //siempre va a tener valor porque ya hemos confirmado en el tap que tiene un valor y no es vacio 
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )

  }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            //siempre va a tener valor porque ya hemos confirmado en el tap que tiene un valor y no es vacio 
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {

          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      )
  }

  logout() {
    localStorage.clear();
  }

}
