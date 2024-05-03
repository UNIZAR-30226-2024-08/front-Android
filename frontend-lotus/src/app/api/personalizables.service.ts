import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
