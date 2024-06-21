import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://casino-backend.azurewebsites.net';
  // private url = 'http://localhost:3001';


  constructor(private httpClient: HttpClient, private constantes: Constantes) {}
  
  iniciarSesion(gmail: string, nombre: string): any {
    console.log(gmail);
    console.log(nombre);

    // Crear un objeto de parámetros de consulta
    let body = {
      'gmail': gmail,
      'nombre': nombre
    };
  
    // Realizar la solicitud GET con la URL que contiene los parámetros
    return this.httpClient.post(`${this.url}/iniciarSesion`, body);
  }

  obtenerUsuario(gmail: string): any {
    let params = {
        gmail: gmail
    };
    return this.httpClient.get(`${this.url}/obtenerUsuario/${gmail}`, {params: params});
  }
  
  obtenerPartidasPausadas(gmail: string): any {
    let params = {
      gmail: gmail
    };
    return this.httpClient.get(`${this.url}/BJ/obtenerPausadas/${gmail}`);
  }

  obtenerReverso(gmail: string): any {
    return this.httpClient.get(`${this.url}/obtenerCartas/${gmail}`);
  }
}
