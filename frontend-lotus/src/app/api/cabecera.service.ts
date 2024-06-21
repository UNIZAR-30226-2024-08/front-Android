import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../../constants/constantes';

@Injectable({
    providedIn: 'root',
})
export class CabeceraService {

    //private url = 'https://casino-backend.azurewebsites.net';
    // private url = 'http://localhost:3001';
    constructor(private httpClient: HttpClient, private constantes: Constantes) { }
    
    obtenerUsuario(usuarioActivo: string): Observable<JSON> {
        return this.httpClient.get<JSON>(`${this.constantes.url}/obtenerUsuario/${usuarioActivo}`);
    }

    cerrarSesion(usuarioActivo: string): any {
        let body = {
            'gmail': usuarioActivo
        }
        sessionStorage.clear();
        return this.httpClient.delete(`${this.constantes.url}/cerrarSesion`, {body: body});
    }
}