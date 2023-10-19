import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_RESTCOUNTRIES } from '../constantes/urls';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {



  constructor(private http: HttpClient) { }

  obtenerPaises(parametros?:string):Observable<any>
  {
    return this.http.get(API_RESTCOUNTRIES + (parametros !== undefined ? '?' +parametros:''));
  }
}
