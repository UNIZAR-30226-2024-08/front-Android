import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class SalasService {
  private socket: WebSocket | null = null;

  constructor(private ngZone: NgZone, private router: Router) { } // Inyecta el Router aquí

  crearSalaSocket(rutaCrearSala: string, usuarioActivo: string, tipoSala: string, aforo: number): void {
    this.socket = new WebSocket(`${rutaCrearSala}/${usuarioActivo}/${tipoSala}/${aforo}`);

    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para crear la sala');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
        let data = JSON.parse(res.data);
        //Gestionar la respuesta del servidor
        this.gestionarMensaje(data,usuarioActivo);
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }

  unirseASalasSocket(rutaUnirseSala: string, codigoSala: string, usuarioActivo: string): void {
    this.socket = new WebSocket(`${rutaUnirseSala}/${codigoSala}/${usuarioActivo}`);

    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para unirse a la sala');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
      let data = JSON.parse(res.data);
      //Gestionar la respuesta del servidor
      this.gestionarMensaje(data,usuarioActivo);
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }
  gestionarMensaje(data: any,usuarioActivo :string): void {
    if(data.accion == 'crear'){
      console.log('sala creada')
      localStorage.setItem("codigoSala",data.codigo);
      this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
    }if(data.accion == 'unirse'){
      console.log('unirse a sala')
      this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
    }else if(data.accion == 'abandonar' && usuarioActivo === data.jugador){
      this.socket?.close(1000, 'El usuario ha abandonado la sala');
      console.log('sala abandonada')
    } else if ( data.accion == 'iniciar'){
      console.log('iniciar partida')
      this.ngZone.run(() => this.router.navigate(['/juego/bj-multiplayer']));
    } else if (data.accion == 'error'){
        if(data.mensaje.includes("está en otras salas")){
          localStorage.setItem("mensajeError","EL USUARIO YA ESTÁ EN OTRA SALA");
        } else if(data.mensaje.includes("debe ser mayor que 0")){
          localStorage.setItem("mensajeError","EL USUARIO NO TIENE SUFICIENTE SALDO");
        } else if(data.mensaje.includes("no existe")){
          localStorage.setItem("mensajeError","LA SALA NO EXISTE");
        }
        this.ngZone.run(() => this.router.navigate(['/juego/mensaje-error.salas']));
    }
  }
  iniciarSala(): void {
    const mensaje = { "accion": "iniciar" };
    this.socket?.send(JSON.stringify(mensaje));
    this.ngZone.run(() => this.router.navigate(['/juego/bj-multiplayer']));
  }
  abandonarSala(): void {
    const mensaje = { "accion": "abandonar" };
    this.socket?.send(JSON.stringify(mensaje));
    this.ngZone.run(() => this.router.navigate(['/menu']));
  }


}
