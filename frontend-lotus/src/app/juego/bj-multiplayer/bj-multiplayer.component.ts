import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { Jugador } from '../../models/jugador';
import { Subscription, debounceTime } from 'rxjs';
import { SalasService } from '../../api/salas.service';
import { CabeceraService } from '../../api/cabecera.service';


enum Fase {
	apuestas = 'apuestas', // apostar
	reparto = 'reparto',
	jugar = 'jugar', // pedirCarta, retirarse, plantarse
	final = 'final' // nuevaRonda
}

@Component({
  selector: 'app-bj-multiplayer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bj-multiplayer.component.html',
  styleUrl: './bj-multiplayer.component.css'
})



export class BjMultiplayerComponent {
  
  usuarioActivo: string | null = null;
  idPartida: string | null = null;
  idSala: string | null = null;
  private sub!: Subscription;
  
  estado = Fase;
  
  jugaoresObservados: boolean = false;
  listaNombreJugadores: string[] = [];

  mostrarApuesta: boolean = true;
  mostrarMensajeFinal: boolean = false;
  
  form!: FormGroup;
  apuesta : number = 0;
  saldo: number = 0;
  haApostado: boolean = false;

  cartasUsuarioActivo: Carta[] = [];
  cartasCrupier: Carta[] = [];
  listaJugadores: Jugador[] = [];
  
  noEsMiTurno: boolean = true;

  
  
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private salsaService: SalasService, private usuariosService: CabeceraService) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
      this.idPartida = localStorage.getItem("codigoPartida");
      this.idSala = localStorage.getItem("codigoSala");
    }
  }
  
  ngOnInit(): void { 
    this.mostrarApuesta = false;
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      console.log(value);
    });
    
    
    this.sub = this.salsaService.mensaje.subscribe((data) => {
      console.log(data);
      console.log("Nuevo mensaje recibido");
      this.nuevoMensaje(data);
    });
  }
  
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  
  // Creacion del formulario de apuesta
  private buildForm() {
    console.log(this.saldo);
    this.form = new FormGroup({
      apuesta: new FormControl('10', [Validators.required, Validators.min(1), ])
    });
  }
  
  save(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarApuesta = false;
      this.apuesta = Number(this.form.value.apuesta);
      this.salsaService.apostar(this.apuesta);
      this.haApostado = true;
    }
  }
  
  saveMensajeFinal(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarMensajeFinal = false;
    }
  }
  
  nuevoMensaje(data: any){
    if(data.accion == 'error'){
      this.mostrarApuesta = true;
    }else {
      //Actualizamos usuarios
      this.actualizarJugadores(data.jugadores);
      //Actualizamos el crupier
      this.actulizarCuprier(data.manoCrupier);
      
      this.mostrarApuesta = (data.fase == this.estado.apuestas && this.haApostado === false) ? true : false;
      if(data.fase != this.estado.apuestas){
        this.haApostado = false;
      }
      this.noEsMiTurno = (data.fase == this.estado.jugar && data.turno == this.usuarioActivo) ? false : true;
      this.mostrarMensajeFinal = (data.fase == this.estado.final) ? true : false;
    }
  }
  
  actualizarJugadores(lista: Jugador[]){
    this.listaJugadores = lista;
    lista.forEach((jugador, indice) => {
      if(jugador.gmail == this.usuarioActivo){
        this.cartasUsuarioActivo = jugador.cartas;
        this.saldo = jugador.saldo;
      }
      else if(this.jugaoresObservados === false){
        this.usuariosService.obtenerUsuario(jugador.gmail).subscribe({
          next: (data: any) => {
            this.listaNombreJugadores[indice] = data.nombre;
          },
          error: (error) => {
            console.error('Error:', error);
          }
        })
      }

    })
    this.jugaoresObservados = true;
  }

  crearRutaCarta(carta: Carta){
    return `../../../assets/sources/juego/cartas/${carta.palo}/${carta.puntos}.png`
  }

  actulizarCuprier(cartas: Carta[]){
    this.cartasCrupier = cartas;
  }

  
  retirarse() {
    this.salsaService.retirarse();
  }
  plantarse() {
    this.salsaService.plantarse();
  }
  pedirCarta() {
    this.salsaService.pedirCarta();
  }

  resetearPartida() {
    this.salsaService.nuevaRonda();
  }
  abandonar() {
    this.salsaService.abandonarSala();
  }
  pausarPartida() {
    this.salsaService.pausarPartida();
  }
}
