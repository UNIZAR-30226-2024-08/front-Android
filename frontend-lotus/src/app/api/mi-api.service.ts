import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiApiService {
  // Base de la URL
  private baseUrl = 'http://casino-backend.azurewebsites.net/'

  constructor(private _httpClient: HttpClient) { }

  // buen video: https://www.youtube.com/watch?v=lxYB79ANJM8

  // Funcion especifica para el "Hola mundo"
  getHolaMundo(){
    return this._httpClient.get(`${this.baseUrl}/holamundo`);
  }

  // Funciones generales de get y post
  getData(){ // 
    return this._httpClient.get(this.baseUrl);
  }

  postData(data: any){
    return this._httpClient.post(`${this.baseUrl}/enviar_datos`, data);
  }
}
