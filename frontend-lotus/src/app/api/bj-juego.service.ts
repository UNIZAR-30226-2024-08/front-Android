import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {

    private baseUrl = 'https://casino-backend.azurewebsites.net';

    constructor(private _httpClient: HttpClient) { }

    apostar(usuarioActivo: string, cant: number, idPartida: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('cant', cant);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    plantarse(usuarioActivo: string, idPartida: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCarta(usuarioActivo: string, idPartida: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    retirarse(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    esMiTurno(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCartasCrupier(idPartida: number) {
        let params = new HttpParams().set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirCartasIniciales(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    pedirOtrosJugadores(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    numeroJugadores(idPartida: number) {
        let params = new HttpParams().set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

    finPartida(idPartida: number) {
        let params = new HttpParams().set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/bjJuego`, { params: params });
    }

}