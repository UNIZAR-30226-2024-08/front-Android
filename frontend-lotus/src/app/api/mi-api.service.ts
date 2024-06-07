import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root',
})
export class MiApiService {
  // Base de la URL
  //private constantes.url = 'https://casino-backend.azurewebsites.net';
  // private constantes.url = 'http://localhost:3001';

  constructor(private _httpClient: HttpClient, private constantes: Constantes) {}

  // buen video: https://www.youtube.com/watch?v=lxYB79ANJM8

  // Funcion especifica para el "Hola mundo"
  getHolaMundo() {
    console.log('Hola mundo en front');
    return this._httpClient.get(`${this.constantes.url}/holamundo`, { responseType: 'text' });
  }

  // Funciones generales de get y post
  getData() {
    //
    return this._httpClient.get(this.constantes.url);
  }

  postData(data: any) {
    return this._httpClient.post(`${this.constantes.url}/enviar_datos`, data);
  }
}
