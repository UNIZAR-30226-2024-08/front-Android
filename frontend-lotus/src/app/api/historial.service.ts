import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../../constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  //private url = 'https://casino-backend.azurewebsites.net';
  constructor(private httpClient: HttpClient, private constantes: Constantes) { }

  obtenerHistorial(gmail: string) {
    return this.httpClient.get(`${this.constantes.url}/obtenerHistorial/${gmail}`);
  }

}
