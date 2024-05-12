import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalizable, listaAvatares, listaCartas } from '../models/personalizables';

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
  
  obtenerUsuario(gmail: string):any{
    return this.httpClient.get(`${this.url}/obtenerUsuario/${gmail}`)
  }

  obtenerAvatarUsuario(gmail: string): any{
    return this.httpClient.get(`${this.url}/obtenerAvatar/${gmail}`)
  }
  obtenerCartasUsuario(gmail: string): any{
    return this.httpClient.get(`${this.url}/obtenerCartas/${gmail}`)
  }

  obtenerAvataresDesbloqueados(gmail: string): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.url}/obtenerAvataresDesbloqueados/${gmail}`)
  }

  obtenerCartasDesbloqueadas(gmail: string): Observable<listaCartas>{
    return this.httpClient.get<listaCartas>(`${this.url}/obtenerCartasDesbloqueadas/${gmail}`)
  }
  
  cambiarAvatar(gmail: string, nombreAvatar: string): any{
    let body = {
      'gmail' : gmail,
      'avatar' : nombreAvatar
    }
    return this.httpClient.put(`${this.url}/cambiarAvatar`, body)
  }
  cambiarCarta(gmail: string, nombreCarta: string): any{
    let body = {
      'gmail' : gmail,
      'carta' : nombreCarta
    }
    return this.httpClient.put(`${this.url}/cambiarCartas`, body)
  }
  
}
