import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { json } from 'stream/consumers';

@Injectable({
    providedIn: 'root',
})
export class CabeceraService {
    
    // Base de la URL
    private baseUrl = 'https://casino-backend.azurewebsites.net';

    private baseUrl2 = 'https://casino-backend.azurewebsites.net';
    constructor(private httpClient: HttpClient) { }

    
    obtenerUsuario(usuarioActivo: string): Observable<Usuario> {

        let params = new HttpParams().set('gmail', usuarioActivo);
  
        return this.httpClient.get<Usuario>(`${this.baseUrl2}/actualizarUsuario`, { params: params });

    }
}