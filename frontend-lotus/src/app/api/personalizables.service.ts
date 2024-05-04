import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalizable, listaAvatares } from '../models/personalizables';

@Injectable({
  providedIn: 'root'
})
export class PersonalizablesService {

  //private url = 'https://casino-backend.azurewebsites.net';
  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  
  cambiarNombre(gmail: string, nuevoNombre:string): any{
    let body = {
      'gmail' : gmail,
      'nombre' : nuevoNombre
    }
    return this.httpClient.put(`${this.url}/cambiarNombre`, body)
  }

  obtenerAvatarUsuario(gmail: string): any{
    return this.httpClient.get(`${this.url}/obtenerAvatar/${gmail}`)
  }


  obtenerAvataresDesbloqueados(gmail: string): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.url}/obtenerAvataresDesbloqueados/${gmail}`)
  }

  cambiarAvatar(gmail: string, nombreAvatar: string): any{
    let body = {
      'gmail' : gmail,
      'avatar' : nombreAvatar
    }
    return this.httpClient.put(`${this.url}/cambiarAvatar`, body)
  }
}
