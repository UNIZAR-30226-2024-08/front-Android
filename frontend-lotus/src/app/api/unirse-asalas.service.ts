import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnirseASalasService {

  private socketDeUnirse: WebSocket | null = null;

  constructor(private ngZone: NgZone, private router: Router) { }

  unirseASala(rutaUnirseSala: string, codigoSala: string, usuarioActivo: string): void {
    this.socketDeUnirse = new WebSocket(`${rutaUnirseSala}/${codigoSala}/${usuarioActivo}`);

    this.socketDeUnirse.addEventListener('open', () => {
      console.log('Conexión establecida para unirse a la sala');
    });

    this.socketDeUnirse.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
      let data = JSON.parse(res.data);
      //Gestionar la respuesta del servidor
      if(data.accion == 'unirse'){
        console.log('unirse a sala')
        this.ngZone.run(() => this.router.navigate(['/juego/abandonar-sala']));
      }
    });

    this.socketDeUnirse.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socketDeUnirse.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }

  abandonarSala(): void {
    const mensaje = { "accion": "abandonar" };
    this.socketDeUnirse?.send(JSON.stringify(mensaje));
    this.ngZone.run(() => this.router.navigate(['/menu']));
  }

}
