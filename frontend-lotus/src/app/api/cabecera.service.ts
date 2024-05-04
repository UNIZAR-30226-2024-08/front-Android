import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { json } from 'stream/consumers';

@Injectable({
    providedIn: 'root',
})
export class CabeceraService {

     //private url = 'https://casino-backend.azurewebsites.net';
    private baseUrl2 = 'http://localhost:3001';
    constructor(private httpClient: HttpClient) { }
    
    obtenerUsuario(usuarioActivo: string): Observable<JSON> {

        return this.httpClient.get<JSON>(`${this.baseUrl2}/obtenerUsuario/${usuarioActivo}`);

    }
}