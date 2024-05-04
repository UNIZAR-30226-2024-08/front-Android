import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CabeceraService {

    //private baseUrl2 = 'https://casino-backend.azurewebsites.net';
    private baseUrl2 = 'http://localhost:3001';
    constructor(private httpClient: HttpClient) { }
    
    obtenerUsuario(usuarioActivo: string): Observable<JSON> {

        let params = new HttpParams().set('gmail', usuarioActivo);
        return this.httpClient.get<JSON>(`${this.baseUrl2}/obtenerUsuario/${usuarioActivo}`);

    }
}