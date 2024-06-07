import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaAvatares, listaCartas } from '../models/personalizables';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  //private constantes.url = 'https://casino-backend.azurewebsites.net';
  // private constantes.url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient, private constantes: Constantes) { }

  obtenerAvataresTineda(gmail: string): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.constantes.url}/tienda/obtenerAvatares/${gmail}`)

  }
  obtenerCartasTineda(gmail: string): Observable<listaCartas>{
    return this.httpClient.get<listaCartas>(`${this.constantes.url}/tienda/obtenerCartas/${gmail}`)

  }
  comprarPersonalizable(gmail: string, nombreAvatar: string, tipo: string): any{

    let body = {
      'gmail' : gmail,
      'nombre' : nombreAvatar,
      'tipo' : tipo
    }

    return this.httpClient.put(`${this.constantes.url}/tienda/comprarPersonalizable`, body)
  }
  
}
