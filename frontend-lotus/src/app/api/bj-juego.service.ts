import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {
    

    private baseUrl = 'https://casino-backend.azurewebsites.net';

    constructor(private _httpClient: HttpClient) { }

    //Pedir las dos cartas iniciales al backend
    pedirCartaJugadorActual(usuarioActivo: string): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });

    }

    meHePasadoDe21(usuarioActivo: string): Observable<Boolean> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        return this._httpClient.get<Boolean>(`${this.baseUrl}/bjJuego`, { params: params });

    }

    pedirOtrosJugadores(usuarioActivo: string): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });

    }
}