import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class GestorSalasService {

  //private constantes.url = 'https://casino-backend.azurewebsites.net';
  // private constantes.url = 'http://localhost:3001';

  constructor(private httpClient: HttpClient, private constantes: Constantes) {}
  
  crearSalaPrivada(gmail: string, tipoDeSala: boolean): any {
    let body = {
      gmail: gmail,
      tipo: tipoDeSala
    };
    
    // Realizar la solicitud GET con la constantes.url que contiene los parámetros
    return this.httpClient.post(`${this.constantes.url}/BJ/crearSala`, body);
  }

  unirseSala(codigo: string, gmail: string): any {
    let body = {
      gmail: gmail,
      codigo: codigo,
    };
    return this.httpClient.put(`${this.constantes.url}/BJ/unirseSala`, body);
  }

  iniciarSala(codigo: string): any {
    let params = {
      codigo: codigo
    };
    return this.httpClient.get(`${this.constantes.url}/BJ/iniciarSala/${codigo}`, {params : params});
  }

  pausarSala(codigo: string) {
    let body = {
      codigo: codigo
    }
    return this.httpClient.put(`${this.constantes.url}/BJ/pausarSala`, body);
  }
  
  
  abandonarSala(codigo: string, gmail: string): any {
    console.log(codigo, gmail);

    let params = new HttpParams().set('codigo', codigo).set('gmail', gmail);
    // let body = {
    //   gmail: gmail,
    //   codigo: codigo,
    // };
    return this.httpClient.delete(`${this.constantes.url}/BJ/abandonarSala`,{params:params});
  }
}
