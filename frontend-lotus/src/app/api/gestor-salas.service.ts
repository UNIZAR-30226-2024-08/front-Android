import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestorSalasService {

   //private url = 'https://casino-backend.azurewebsites.net';
  private url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) {}
  
  CrearSalaPrivada(gmail: string, tipoDeSala: boolean): any {
    console.log(gmail, tipoDeSala);
    // Crear un objeto de parámetros de consulta
    //let params = new HttpParams().set('gmail', gmail).set('tipo', tipoDeSala);
    let body = {
      gmail: gmail,
      tipo: tipoDeSala
    };
    
    // Realizar la solicitud GET con la URL que contiene los parámetros
    return this.httpClient.post(`${this.url}/BJ/crearSala`, body);
  }

  UnirseSala(codigo: string, gmail: string): any {
    console.log(codigo, gmail);

    let body = {
      gmail: gmail,
      codigo: codigo,
    };
    return this.httpClient.put(`${this.url}/BJ/unirseSala`, body);
  }

  IniciarSala(codigo: string): any {
    console.log(codigo);

    let body = {
      codigo: codigo,
    };
    return this.httpClient.put(`${this.url}/BJ/iniciarSala`, body);
  }
  
  
  AbandonarSala(codigo: string, gmail: string): any {
    console.log(codigo, gmail);

    let params = new HttpParams().set('codigo', codigo).set('gmail', gmail);
    // let body = {
    //   gmail: gmail,
    //   codigo: codigo,
    // };
    return this.httpClient.delete(`${this.url}/BJ/abandonarSala`,{params:params});
  }
}
