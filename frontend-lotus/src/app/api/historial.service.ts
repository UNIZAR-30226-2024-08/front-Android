import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private url = 'https://casino-backend.azurewebsites.net';
  constructor(private httpClient: HttpClient) { }

  obtenerHistorial(gmail: string) {
    const params = new HttpParams().set('gmail', gmail);
    return this.httpClient.get(`${this.url}/obtenerHistorial/${gmail}`, { params : params});
  }

}
