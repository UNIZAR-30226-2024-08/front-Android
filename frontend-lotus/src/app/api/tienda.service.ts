import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaAvatares, listaCartas } from '../models/personalizables';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //private url = 'https://casino-backend.azurewebsites.net';
  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  obtenerAvataresTineda(gmail: string): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.url}/tienda/obtenerAvatares/${gmail}`)

  }
  obtenerCartasTineda(gmail: string): Observable<listaCartas>{
    return this.httpClient.get<listaCartas>(`${this.url}/tienda/obtenerCartas/${gmail}`)

  }
  comprarPersonalizable(gmail: string, nombreAvatar: string, tipo: string): any{

    let body = {
      'gmail' : gmail,
      'nombre' : nombreAvatar,
      'tipo' : tipo
    }

    return this.httpClient.put(`${this.url}/tienda/comprarPersonalizable`, body)
  }
  
}
