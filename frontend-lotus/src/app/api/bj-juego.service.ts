import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class bjJuegoService {

    private baseUrl = 'https://casino-backend.azurewebsites.net';

    constructor(private _httpClient: HttpClient) { }

    // pedirCartasIniciales(usuarioActivo: string, idPartida: number): any {
    //     console.log("Pedir cartas iniciales: " + usuarioActivo, idPartida);
    //     let body = {
    //         'gmail': usuarioActivo,
    //         'idPartida': idPartida
    //     };
    //     return this._httpClient.put(`${this.baseUrl}/partidaBJ/pedirCartasIniciales`, body);
    // }

    // pedirCartasIniciales(usuarioActivo: string, idPartida: any): Observable<String[]> {
    //     console.log("Estoy en el servicio de bj-service...." + usuarioActivo, idPartida)
    //     const params = {
    //         gmail: usuarioActivo,
    //         idPartida: idPartida
    //     };
    //     return this._httpClient.get<String[]>(`${this.baseUrl}/partidaBJ/pedirCartasIniciales`, { params : params });
    // }

    pedirCartasIniciales(usuarioActivo: string, idPartida: any): any {
        console.log("Estoy en el servicio de bj-service...." + usuarioActivo, idPartida)

        let params = {
            gmail: usuarioActivo,
            idPartida: idPartida,
        };
        return this._httpClient.get(`${this.baseUrl}/partidaBJ/pedirCartasIniciales/${usuarioActivo}/${idPartida}`, {params: params});
    }

    apostar(usuarioActivo: string, cant: number, idPartida: number): any {
        console.log(usuarioActivo, cant, idPartida);
        let body = {
            gmail: usuarioActivo,
            cant: cant,
            idPartida: idPartida
        };
        return this._httpClient.put(`${this.baseUrl}/partidaBJ/apostar`, body);
    }

    plantarse(usuarioActivo: string, idPartida: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    pedirCarta(usuarioActivo: string, idPartida: number): Observable<JSON> {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    retirarse(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    esMiTurno(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    pedirCartasCrupier(idPartida: number) {
        let params = new HttpParams().set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    

    pedirOtrosJugadores(usuarioActivo: string, idPartida: number) {
        let params = new HttpParams().set('gmail', usuarioActivo);
        params.set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

    // numeroJugadores(idPartida: number) {
    //     let params = new HttpParams().set('idPartida', idPartida);
    //     return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    // }

    finPartida(idPartida: number) {
        let params = new HttpParams().set('idPartida', idPartida);
        return this._httpClient.get<JSON>(`${this.baseUrl}/partidaBJ`, { params: params });
    }

}