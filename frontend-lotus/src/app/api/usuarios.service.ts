import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'http://localhost:3001';
  // private url = 'https://casino-backend.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}
  
  iniciarSesion(gmail: string, nombre: string): any {
    console.log(gmail);
    console.log(nombre);
    
    // Crear un objeto de parámetros de consulta
    let params = new HttpParams()
      .set('gmail', gmail)
      .set('nombre', nombre);
  
    // Realizar la solicitud GET con la URL que contiene los parámetros
    return this.httpClient.post(`${this.url}/iniciarSesion`,params);
  }
}
