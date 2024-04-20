import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'https://casino-backend.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  iniciarSesion(_gmail: string, _nombre: string): any {
    // Crear un objeto de parámetros de consulta
    let params = new HttpParams()
      .set('gmail', _gmail)
      .set('nombre', _nombre);
  
    // Realizar la solicitud GET con los parámetros de consulta
    return this.httpClient.get(`${this.url}/iniciarSesion`, { params: params, responseType: 'text' });
  }
}
