import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {

    private baseUrl = 'https://casino-backend.azurewebsites.net';

    constructor(private _httpClient: HttpClient) { }

    iniciarPartida(idPartida: number): any {
        let body = {
          idPartida: idPartida
        };
        return this._httpClient.post(`${this.baseUrl}/BJ/iniciarPartida`, body);
      }

    pedirNombresJugadores(idPartida: any): any {
        console.log("Pidiendo nombres de jugadores de la partida " + idPartida + "...")

        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/pedirJugadores/${idPartida}`, {params: params});
    }

    pedirCartasJugador(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida,
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/pedirCartasJugador/${usuarioActivo}/${idPartida}`, {params: params});
    }

    apostar(usuarioActivo: string, cant: number, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            cant: cant,
            idPartida: idPartida
        };
        return this._httpClient.put(`${this.baseUrl}/partidaBJ/apostar`, body);
    }

    plantarse(usuarioActivo: string, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.post(`${this.baseUrl}/partidaBJ/plantarse`, body);
    }

    pedirCarta(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/pedirCarta/${usuarioActivo}/${idPartida}`, {params: params});
    }
    
    retirarse(usuarioActivo: string, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.post(`${this.baseUrl}/partidaBJ/retirarse`, body);
    }

    esMiTurno(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/esMiTurno/${usuarioActivo}/${idPartida}`, {params: params});
    }

    pedirCartasCrupier(idPartida: any): any {
        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/pedirCartasCrupier/${idPartida}`, {params: params});
    }

    finPartida(idPartida: any): any {
        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/esFinPartida/${idPartida}`, {params: params});
    }
}