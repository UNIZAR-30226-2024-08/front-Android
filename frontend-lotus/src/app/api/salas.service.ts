import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SalasService {
  private socket: WebSocket | null = null;


  constructor(private ngZone: NgZone, private router: Router) { } // Inyecta el Router aquí

  connect(rutaCrearSala: string, usuarioActivo: string, tipoSala: string, aforo: number): void {
    this.socket = new WebSocket(`${rutaCrearSala}/${usuarioActivo}/${tipoSala}/${aforo}`);

    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para crear la sala');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
        let data = JSON.parse(res.data);
        //Gestionar la respuesta del servidor
        if(data.accion == 'crear'){
          console.log('sala creada')
          localStorage.setItem("codigoSala",data.codigo);
          this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
        }
    });

    this.socket.addEventListener('close', () => {
      console.log('Conexión cerrada');
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }

  sendMessage(message: any): void {
    this.socket?.send(JSON.stringify(message));
  }

  close(): void {
    this.socket?.close();
  }
}
