import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DatosMun } from '../interfaces/datosMun.interface';
import { Datos } from '../interfaces/datos.interface';
import codigos from '../../../assets/codigos.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  Apikey: string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWFsZm9uc29Admlld25leHQuY29tIiwianRpIjoiNDUwYzY4M2MtYjhhOC00ZDAyLTkxYzctODJiNjUyYzg0MTM2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2NzgwOTc5MzUsInVzZXJJZCI6IjQ1MGM2ODNjLWI4YTgtNGQwMi05MWM3LTgyYjY1MmM4NDEzNiIsInJvbGUiOiIifQ.U8sBFVn5yEWRZTm-cgEhaezpe5rKJm5g481jni9L2PE';

  private apiUrl: string = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria';

 


  constructor(private http: HttpClient) { }

  //con el nombre de un municipio, obtengo sus codigos y los concateno para obtener un codigo unico por municipio 
  //con el bucle lo que hacemos es comparar el nombre del parametro con los nombres de los codigo y si coincide concatena los codigos de ese municipio
  obtenerCodigoMunicipio(municipio: string): string {
    for (let i = 0; i < codigos.codigos.length; i++) {
      if (codigos.codigos[i]['NOMBRE '] === municipio) {
        const codigoMunicipio = codigos.codigos[i].CPRO + codigos.codigos[i].CMUN;
        return codigoMunicipio;
      }
    }
    return "";

  }
  //con el nombre de un municipio, busco su codigo con el metodo obtenerCodigoMunicipio y obtengo la informacion que tiene la url de los datos 
  obtenerMunicipio(municipio: string): Observable<DatosMun> {
    const codigoMunicipio = this.obtenerCodigoMunicipio(municipio);
    const url = `${this.apiUrl}/${municipio}?api_key=${this.Apikey}`;

    return this.http.get<DatosMun>(url);
  }

  //obtener los datos del municipio, le entra como parameto la url obtenida en el param datos 
  obtenerDatosMunicipio(apiDato: string):Observable<Array<Datos>> {
    const urlDato = `${apiDato}?api_key=${this.Apikey};`
    return this.http.get<Array<Datos>>(urlDato);
  }

}
