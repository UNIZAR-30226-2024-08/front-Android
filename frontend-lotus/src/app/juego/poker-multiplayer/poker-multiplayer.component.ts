import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { Jugador } from '../../models/jugador';
import { Subscription, debounceTime } from 'rxjs';
import { SalasService } from '../../api/salas.service';


enum Fase {
	apuesta1 = "Pre-Flop",
	apuesta2 = "Flop", // flop
	apuesta3 = "Turn", // turn
	apuesta4 = "River", // river
	showdown = "Showdown",
}

@Component({
  selector: 'app-poker-multiplayer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './poker-multiplayer.component.html',
  styleUrl: './poker-multiplayer.component.css'
})
export class PokerMultiplayerComponent {

  usuarioActivo: string | null = null;
  idPartida: string | null = null;
  idSala: string | null = null;
  
  private sub!: Subscription;
  
  estado = Fase;
  
  mostrarApuesta: boolean = true;
  mostrarMensajeFinal: boolean = false;
  
  form!: FormGroup;
  apuesta : number = 0;
  saldo: number = 0;
  
  urlsCartasJugadorActivo: String[] = [];
  cartasUsuarioActivo: Carta[] = [];
  numeroJugadores: number = 0;
  cartasCrupier: Carta[] = [];
  listaJugadores: Jugador[] = [];
  listaJugadoresSinBanca: Jugador[] = [];
  bancaJugador!: Jugador;
  listaGanadores: string[] = []
  
  noEsFinPartida: boolean = true;
  noEsMiTurno: boolean = true;
  ganador: any;
  
  correosJugadores: string[] = []
  
  jugadores: Usuario | undefined;
  
  url!: string;
  
  nuevaCarta: Carta | undefined;
  numeroCarta: number = 1;
  ElUserHaPerdido: String = ""
  
  cartasDeUsuario: Carta[] = []
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private salsaService: SalasService) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
      this.idPartida = localStorage.getItem("codigoPartida");
      this.idSala = localStorage.getItem("codigoSala")
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
    this.form = new FormGroup({
      apuesta: new FormControl('10', [Validators.required, Validators.min(10)])
    });
  }
  
  save(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarApuesta = false;
      this.apuesta = Number(this.form.value.apuesta);
      this.salsaService.apostar(this.apuesta);
    }
  }
  
  saveMensajeFinal(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarMensajeFinal = false;
    }
  }
  
  nuevoMensaje(data: any){
    //Actualizamos usuarios
    this.actulaizarJugadores(data.jugadores);
    //Actualizamos el crupier
    this.actulizarCuprier(data.manoCrupier);
    
    //Actualizamos la fase
  }
  
  actulaizarJugadores(lista: Jugador[]){
    this.listaJugadores = lista;
    lista.forEach(jugador => {
      if(jugador.gmail == this.usuarioActivo){
        this.cartasUsuarioActivo = jugador.cartas;
        this.saldo = jugador.saldo;
      }
    })
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
