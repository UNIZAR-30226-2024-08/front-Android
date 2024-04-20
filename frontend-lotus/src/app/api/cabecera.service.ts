import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CabeceraService {
    
    // Base de la URL
    private baseUrl = 'https://casino-backend.azurewebsites.net';

    private baseUrl2 = 'https://casino-backend.azurewebsites.net';
    constructor(private httpClient: HttpClient) { }

    
    obtenerUsuario(usuarioActivo: string): Observable<JSON> {
        return this.httpClient.get<JSON>(`${this.baseUrl2}/${usuarioActivo}`);
  }
}