import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalasService {
  private socket: WebSocket | null = null;
  
  private mensajeSubject = new Subject<any>();
  mensaje = this.mensajeSubject.asObservable();
  private tipoSala: string = "multiplayer";

  private rutaJuego: string = '';

  private esPublica: boolean = false;


  constructor(private ngZone: NgZone, private router: Router) { } // Inyecta el Router aquí

  /* Socket para crear una sala de cero */
  crearSalaSocket(rutaCrearSala: string, usuarioActivo: string, tipoSala: string, aforo: number): void {
    this.socket = new WebSocket(`${rutaCrearSala}/${usuarioActivo}/${tipoSala}/${aforo}`);
    this.tipoSala = aforo > 1 ? "multiplayer" : "oneplayer";

    this.rutaJuego = rutaCrearSala.includes('BJ') ? '/juego/bj-multiplayer' : '/juego/poker-multiplayer';

    this.esPublica = tipoSala === "publica";

    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para crear la sala');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
        let data = JSON.parse(res.data);
        //Gestionar la respuesta del servidor
        this.gestionarMensaje(data,usuarioActivo, this.rutaJuego);
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }

  /* Socket para unirse a una sala ya creada */
  unirseASalasSocket(rutaUnirseSala: string, codigoSala: string, usuarioActivo: string): void {
    this.socket = new WebSocket(`${rutaUnirseSala}/${codigoSala}/${usuarioActivo}`);
    this.rutaJuego = rutaUnirseSala.includes('BJ') ? '/juego/bj-multiplayer' : '/juego/poker-multiplayer';
    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para unirse a la sala');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
      let data = JSON.parse(res.data);
      //Gestionar la respuesta del servidor
      this.gestionarMensaje(data,usuarioActivo, this.rutaJuego);
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }

  reanudarSocket(rutaReanudar: string, codigoSala: string, usuarioActivo: string): void {
    this.socket = new WebSocket(`${rutaReanudar}/${codigoSala}/${usuarioActivo}`);
    this.rutaJuego = rutaReanudar.includes('BJ') ? '/juego/bj-multiplayer' : '/juego/poker-multiplayer';
    this.socket.addEventListener('open', () => {
      console.log('Conexión establecida para pausar la partida');
    });

    this.socket.addEventListener('message', (res) => {
      console.log('Mensaje del servidor:', res.data);
      let data = JSON.parse(res.data);
      if(data.accion === "reanudar"){
        this.ngZone.run(() => this.router.navigate([this.rutaJuego]));
      } else {
        this.gestionarMensaje(data,usuarioActivo, this.rutaJuego);
      }
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión cerrada:', event);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error:', event);
    });
  }
  /* funcion para gestionar los mensajes del servidor */
  gestionarMensaje(data: any,usuarioActivo :string, ruta: string): void {
    if(data.accion == 'crear'){
      console.log('sala creada')
      localStorage.setItem("codigoSala",data.codigo);
      if(this.tipoSala === "multiplayer" && !this.esPublica){
        this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
      } else if(this.tipoSala === "multiplayer" && this.esPublica){
        console.log('sala publica creada')
        this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-publica']));
      }
      else{
        this.iniciarSala();
      }
    }if(data.accion == 'unirse'){
      console.log('unirse a sala')
      if(this.esPublica){
        this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-publica']));
      } else{
       this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
      }
    }else if(data.accion == 'abandonar' && usuarioActivo === data.jugador){
      this.socket?.close(1000, 'El usuario ha abandonado la sala');
      console.log('sala abandonada')
      this.ngZone.run(() => this.router.navigate(['/menu']));
    } else if ( data.accion == 'iniciar'){
      console.log('iniciar partida')
      this.ngZone.run(() => this.router.navigate([ruta]));
    } else if (data.accion == 'error'){
      if(data.mensaje.includes("no puedes apostar tanto")|| data.mensaje.includes("no es mayor")||data.mensaje.includes("no tiene suficiente")){
        this.mensajeSubject.next(data);
      } else{
        if(data.mensaje.includes("está en otras salas")){
          localStorage.setItem("mensajeError","EL USUARIO YA ESTÁ EN OTRA SALA");
        } else if(data.mensaje.includes("debe ser mayor que 0")){
          localStorage.setItem("mensajeError","EL USUARIO NO TIENE SUFICIENTE SALDO");
        } else if(data.mensaje.includes("no existe")){
          localStorage.setItem("mensajeError","LA SALA NO EXISTE");
        } else if (data.mensaje.includes("La sala está llena")){
          localStorage.setItem("mensajeError","LA SALA ESTÁ LLENA");
        }
        this.ngZone.run(() => this.router.navigate(['/juego/mensaje-error.salas']));
      }
    } else if(data.accion == 'estado'){
      this.mensajeSubject.next(data);
    } else if(data.accion == 'pausar'){
      console.log('partida pausada')
      if(data.jugadores.includes(usuarioActivo)){
        this.ngZone.run(() => this.router.navigate(['/menu']));
        this.socket?.close(1000, 'El usuario ha pausado la sala');
      }else{
        this.ngZone.run(() => this.router.navigate(['/juego/mensaje-partidas-pausadas']));
      }
    }
  }

  /* Funciones auxiliares para enviar mensajes al servidor */
  iniciarSala(): void {
    const mensaje = { "accion": "iniciar" };
    this.socket?.send(JSON.stringify(mensaje));
    this.ngZone.run(() => this.router.navigate([this.rutaJuego]));
  }
  abandonarSala(): void {
    const mensaje = { "accion": "abandonar" };
    this.socket?.send(JSON.stringify(mensaje));
    this.ngZone.run(() => this.router.navigate(['/menu']));
  }

  apostar(cantidad: number): void {
    const mensaje = { 
      "accion": "apostar",
      "cantidad": cantidad
    };
    this.socket?.send(JSON.stringify(mensaje));
  }

  pedirCarta(): void {
    const mensaje = { "accion": "pedirCarta" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  plantarse(): void {
    const mensaje = { "accion": "plantarse" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  retirarse(): void {
    const mensaje = { "accion": "retirarse" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  nuevaRonda(): void {
    const mensaje = { "accion": "nuevaRonda" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  pausarPartida(): void {
    const mensaje = { "accion": "pausar" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  reanudarPartida(): void {
    const mensaje = { "accion": "reanudar" };
    this.socket?.send(JSON.stringify(mensaje));
  }

  subirApuesta(cantidad: number): void {
    const mensaje = {
      "accion": "subirApuesta",
      "cantidad": cantidad
    };
    this.socket?.send(JSON.stringify(mensaje));
  }

  igualarApuesta(): void {
    const mensaje = { "accion": "igualarApuesta" };
    this.socket?.send(JSON.stringify(mensaje));
  }
}
