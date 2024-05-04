import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaAvatares } from '../models/personalizables';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //private url = 'https://casino-backend.azurewebsites.net';
  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  obtenerAvataresTineda(): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.url}/tineda/obtenerAvatares`)

  }

  comprarAvatar(gmail: string, nombreAvatar: string, tipo: string): any{

    let body = {
      'gmail' : gmail,
      'nombreAvatar' : nombreAvatar,
      'tipo' : "Avatar"
    }

    return this.httpClient.put(`${this.url}/tineda/comprarPersonalizable`, body)
  }

}
