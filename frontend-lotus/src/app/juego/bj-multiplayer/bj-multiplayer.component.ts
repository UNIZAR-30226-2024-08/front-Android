import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, noop } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { bjJuegoService } from '../../api/bj-juego.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-bj-multiplayer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bj-multiplayer.component.html',
  styleUrl: './bj-multiplayer.component.css'
})
  
export class BjMultiplayerComponent {
  
  private usuarioActivo: any;
  private idPartida: any;

  form!: FormGroup;
  apuesta : number = 0;

  urlsCartasJugadorActivo: String[] = [];
  cartasUsuarioActivo: any[] = [];
  numeroJugadores: number = 0;
  cartasCrupier: String[] = [];
  listaJugadores: Jugador[] = [];
  listaJugadoresSinBanca: Jugador[] = [];
  bancaJugador!: Jugador;
  
  noEsFinPartida: boolean = true;
  noEsMiTurno: boolean = true;
  ganador: any;



  jugadores: Usuario | undefined;

  url!: string;
  mostrarApuesta: boolean = true;
  nuevaCarta: Carta | undefined;
  numeroCarta: number = 1;
  ElUserHaPerdido: String = ""

  cartasDeUsuario: Carta[] = []

  constructor(private bjJuegoService : bjJuegoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
      this.idPartida  = localStorage.getItem("idPartida");
    }
  }
  
  ngOnInit(): void {

    // Pedir numero de jugadores en la partida
    this.pedirNumeroJugadores();
        //Obtener cartas iniciales del jugador
    this.pedirCartasIniciales();

    //Obtener jugadores
    this.mostrarCartasOtros();
    

    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });

    this.esMiTurno();
  }

  private esMiTurno() {
    while (this.noEsMiTurno) {
      this.bjJuegoService.esMiTurno(this.usuarioActivo, this.idPartida).subscribe({
        next: (data: any) => {
          data as boolean
          if (data) {
            this.noEsMiTurno = false;
          }
        },
        error: (error) => {
          console.log("Error al obtener el numero de jugadores");
          console.log(error);
        }
      })
    }
    // Indicar que es el turno del jugador
    //Mostrar botones
  }

  // Creacion del formulario de apuesta
  private buildForm() {
    this.form = new FormGroup({
      apuesta: new FormControl('10', [Validators.required, Validators.min(10)])
    });
  }

  private pedirNumeroJugadores() {
    this.bjJuegoService.numeroJugadores(this.idPartida).subscribe({
      next: (data: any) => {
        data as number
        this.numeroJugadores = data;
      },
      error: (error) => {
        console.log("Error al obtener el numero de jugadores");
        console.log(error);
      }
    })
  }

  private mostrarCartasOtros() {

    // Pedir cartas crupier
    this.bjJuegoService.pedirCartasCrupier(this.idPartida).subscribe({
      next: (data: any) => {
        data as String[]
        this.cartasCrupier.push(data)
      },
      error: (error) => {
        console.log("Error al obtener las cartas del crupier");
        console.log(error);
      }
    })

    this.bancaJugador = new Jugador(1, "Banca", this.cartasCrupier);
    this.listaJugadores.push(this.bancaJugador);

    // Pedir cartas otros jugadores
    this.bjJuegoService.pedirOtrosJugadores(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        //this.listaJugadores.push()
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })

  }
 
  
  
  save(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarApuesta = false;
      this.apuesta = Number(this.form.value.apuesta);
    }

  }

  pedirCartasIniciales() {
    this.bjJuegoService.pedirCartasIniciales(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        data as string[]
        this.urlsCartasJugadorActivo.push(data);
      }
    })
    this.mostrarCartasJugadorActual();
  }
  
  pedirCarta() {
    this.bjJuegoService.pedirCarta(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        data as String;
        this.urlsCartasJugadorActivo.push(data);
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })
    this.mostrarCartasJugadorActual();
  }

  mostrarCartasJugadorActual() {
    for (let i = 0; this.urlsCartasJugadorActivo.length; i++){
      this.cartasUsuarioActivo.push({
        id: i + 1,
        src: this.urlsCartasJugadorActivo[i]
      });
    }    
  }

  plantarse() {
    this.bjJuegoService.plantarse(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
      },
      error: (error) => {
        console.log("Error al plantarse");
        console.log(error);
      }
    })   
    
    this.finPartida()
  }

  private finPartida() {
    while (this.noEsFinPartida) {
      this.bjJuegoService.finPartida(this.idPartida).subscribe({
        next: (data: any) => {
          data as String[]
          if (data[0] == "Si") {
            this.noEsFinPartida = false;
            this.ganador = data[0]
          }
        },
        error: (error: any) => {
          console.log("Error al apostar");
          console.log(error);
        }
      })
    }

    // Mostrar ganador
    
  }
  
  apostar() {
    this.bjJuegoService.apostar(this.usuarioActivo, this.apuesta, this.idPartida).subscribe({
      next: (data: any) => {
      },
      error: (error) => {
        console.log("Error al apostar");
        console.log(error);
      }
    })
  }

}
