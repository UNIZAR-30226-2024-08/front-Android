import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalizable } from '../models/personalizables';

@Injectable({
  providedIn: 'root'
})
export class PersonalizablesService {

  private url = 'https://casino-backend.azurewebsites.net';
  constructor(private httpClient: HttpClient) { }

  
  cambiarNombre(gmail: string, nuevoNombre:string): any{

    let body = {
      'gmail' : gmail,
      'nombre' : nuevoNombre
    }

    return this.httpClient.put(`${this.url}/cambiarNombre`, body)
  }

  obtenerAvatarUsuario(gmail: string): any{

    let params = new HttpParams().set('gmail', gmail);

    return this.httpClient.get(`${this.url}/obtenerAvatar/:gmail`, {params: params})
  }


  obtenerAvataresDesbloqueados(gmail: string): Observable<Personalizable>{

    let params = new HttpParams().set('gmail', gmail);

    return this.httpClient.get<Personalizable>(`${this.url}/obtenerAvataresDesbloqueados/:gmail`, {params: params})
  }
}
