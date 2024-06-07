import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../../constants/constantes';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {

    

    constructor(private _httpClient: HttpClient, private constantes: Constantes) { }


    pedirNombresJugadores(idPartida: any): any {
        console.log("Pidiendo nombres de jugadores de la partida " + idPartida + "...")

        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/pedirJugadores/${idPartida}`, {params: params});
    }

    pedirCartasJugador(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida,
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/pedirCartasJugador/${usuarioActivo}/${idPartida}`, {params: params});
    }

    apostar(usuarioActivo: string, cant: number, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            cant: cant,
            idPartida: idPartida
        };
        return this._httpClient.put(`${this.constantes.url}/partidaBJ/apostar`, body);
    }

    plantarse(usuarioActivo: string, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.post(`${this.constantes.url}/partidaBJ/plantarse`, body);
    }

    pedirCarta(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/pedirCarta/${usuarioActivo}/${idPartida}`, {params: params});
    }
    
    retirarse(usuarioActivo: string, idPartida: number): any {
        let body = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.post(`${this.constantes.url}/partidaBJ/retirarse`, body);
    }

    esMiTurno(usuarioActivo: string, idPartida: any): any {
        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/esMiTurno/${usuarioActivo}/${idPartida}`, {params: params});
    }

    pedirCartasCrupier(idPartida: any): any {
        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/pedirCartasCrupier/${idPartida}`, {params: params});
    }

    finPartida(idPartida: any): any {
        let params = {
            idPartida: idPartida
        };
        return this._httpClient.get(`${this.constantes.url}/partidaBJ/esFinPartida/${idPartida}`, {params: params});
    }
}