import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {

    private baseUrl = 'https://casino-backend.azurewebsites.net';

    constructor(private _httpClient: HttpClient) { }

    apostar(usuarioActivo: string, cant: number, codigoSala: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('cant', cant);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    plantarse(usuarioActivo: string, codigoSala: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCarta(usuarioActivo: string, codigoSala: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    retirarse(usuarioActivo: string, codigoSala: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    esMiTurno(usuarioActivo: string, codigoSala: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCartasCrupier(codigoSala: number) {
        let params = new HttpParams().set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCartasIniciales(usuarioActivo: string, codigoSala: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirOtrosJugadores(usuarioActivo: string, codigoSala: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    numeroJugadores(codigoSala: number) {
        let params = new HttpParams().set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    finPartida(codigoSala: number) {
        let params = new HttpParams().set('codigoSala', codigoSala);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

}