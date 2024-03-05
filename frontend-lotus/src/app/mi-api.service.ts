import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiApiService {
  // Base de la URL
  private baseUrl = 'http://localhost:8080'

  constructor(private _httpClient: HttpClient) { }

  // buen video: https://www.youtube.com/watch?v=lxYB79ANJM8

  // Funcion especifica para el "Hola mundo"
  getHolaMundo(): Observable<string>{
    return this._httpClient.get<string>(this.baseUrl);
  }

  // Funciones generales de get y post
  getData(): Observable<any> { // 
    return this._httpClient.get(this.baseUrl);
  }

  postData(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/enviar_datos`, data);
  }
}
