import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'UqtWLhyv3lGbSvv3A75tOKRxdDHoU1k3';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  //TODO: cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    //si esto retorna un arreglo null, lo devuelvo con un arreglo vacio 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    //la linea anterior es equivalente a lo que viene a continuacion

    /*
      if (localStorage.getItem('historial')) {
        this._historial = JSON.parse(localStorage.getItem('historial')!);
  
      }*/
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    //limitamos a no tener duplicados en el historial de busqueda
    if (!this._historial.includes(query)) {
      //insertar la busqued al inicio 
      this._historial.unshift(query);
      //limitamos el historial de busqueda a que almacene 10
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
      
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

  }

}
