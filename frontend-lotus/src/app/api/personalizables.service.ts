import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalizable, listaAvatares, listaCartas } from '../models/personalizables';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class PersonalizablesService {

  //private constantes.url = 'https://casino-backend.azurewebsites.net';
  // private constantes.url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient, private constantes: Constantes) { }

  
  cambiarNombre(gmail: string, nuevoNombre:string): any{
    let body = {
      'gmail' : gmail,
      'nombre' : nuevoNombre
    }
    return this.httpClient.put(`${this.constantes.url}/cambiarNombre`, body)
  }
  
  obtenerUsuario(gmail: string):any{
    return this.httpClient.get(`${this.constantes.url}/obtenerUsuario/${gmail}`)
  }

  obtenerAvatarUsuario(gmail: string): any{
    return this.httpClient.get(`${this.constantes.url}/obtenerAvatar/${gmail}`)
  }
  obtenerCartasUsuario(gmail: any): any{
    return this.httpClient.get(`${this.constantes.url}/obtenerCartas/${gmail}`)
  }

  obtenerAvataresDesbloqueados(gmail: string): Observable<listaAvatares>{
    return this.httpClient.get<listaAvatares>(`${this.constantes.url}/obtenerAvataresDesbloqueados/${gmail}`)
  }

  obtenerCartasDesbloqueadas(gmail: string): Observable<listaCartas>{
    return this.httpClient.get<listaCartas>(`${this.constantes.url}/obtenerCartasDesbloqueadas/${gmail}`)
  }
  
  cambiarAvatar(gmail: string, nombreAvatar: string): any{
    let body = {
      'gmail' : gmail,
      'avatar' : nombreAvatar
    }
    return this.httpClient.put(`${this.constantes.url}/cambiarAvatar`, body)
  }
  cambiarCarta(gmail: string, nombreCarta: string): any{
    let body = {
      'gmail' : gmail,
      'carta' : nombreCarta
    }
    return this.httpClient.put(`${this.constantes.url}/cambiarCartas`, body)
  }
  
}
