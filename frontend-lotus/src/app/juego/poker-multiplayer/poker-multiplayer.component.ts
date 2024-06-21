import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { Jugador } from '../../models/jugador';
import { Subscription, debounceTime } from 'rxjs';
import { SalasService } from '../../api/salas.service';
import { CabeceraService } from '../../api/cabecera.service';
import { PersonalizablesService } from '../../api/personalizables.service';


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
  
  jugaoresObservados: boolean = false;
  listaNombreJugadores: string[] = [];

  mostrarApuesta: boolean = true;
  mostrarMensajeFinal: boolean = false;

  reversoCarta!: string
  
  form!: FormGroup;
  apuesta : number = 0;
  saldo: number = 0;
  haApostado: boolean = false;

  cartasUsuarioActivo: Carta[] = [];
  cartasCrupier: Carta[] = [];
  listaJugadores: Jugador[] = [];
  listaCartasMesa: Carta[] = [];
  
  noEsMiTurno: boolean = true;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private salsaService: SalasService, private usuariosService: CabeceraService, private personalizablesService: PersonalizablesService ) {
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

    this.personalizablesService.obtenerCartasUsuario(this.usuarioActivo).subscribe({
      next: (data: any) => {
        this.reversoCarta = data.nombre;
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    })
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
    this.actualizarJugadores(data.jugadores);
    //Actualizamos cartas centrales de la mesa
    this.listaCartasMesa = data.cartasComunitarias;
    //Actualizamos la fase
    
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

  crearRutaCarta(carta: Carta | null){
    return carta == null ? `../../../assets/sources/avatares/${this.reversoCarta}.png` : `../../../assets/sources/juego/cartas/${carta.palo}/${carta.puntos}.png`;
  }


  subirApuesta(cantidad: number){

  }
  igualarApuesta(){
    this.salsaService.igualarApuesta();
  }
  retirarse() {
    this.salsaService.retirarse();
  }
  plantarse() {
    this.salsaService.plantarse();
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
