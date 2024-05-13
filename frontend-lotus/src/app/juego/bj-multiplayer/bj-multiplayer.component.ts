import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, noop } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { bjJuegoService } from '../../api/bj-juego.service';
import { UsuariosService } from '../../api/usuarios.service';
import { Jugador } from '../../models/jugador';
import { stringify } from 'querystring';
import { MensajePedirCarta } from '../../models/mensajePedirCarta';

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
  private idSala: any;
  
  mostrarApuesta: boolean = true;
  mostrarMensajeFinal: boolean = false;

  form!: FormGroup;
  apuesta : number = 0;

  urlsCartasJugadorActivo: String[] = [];
  cartasUsuarioActivo: any[] = [];
  numeroJugadores: number = 0;
  cartasCrupier: String[] = [];
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

  constructor(private bjJuegoService : bjJuegoService, private usuarioService : UsuariosService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
      this.idPartida = localStorage.getItem("codigoPartida");
      this.idSala = localStorage.getItem("codigoSala")
    }
  }
  
  ngOnInit(): void {
    console.log("En ngOnInit de multijugador...")
  
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });

    // // Listar jugadores en la partida sin cartas
    this.listarNombresJugadores(); // Hay error en el backend

    // // Mostrar las cartas iniciales del jugador actual
    // console.log("[~] Pidiendo las dos cartas iniciales del jugador activo...")
    // this.pedirCartasJugadorActivo();   // Hay error en esta funcion en el backend

    // while (this.noEsMiTurno) {
    //   this.pedirCartasOtrosJugadores()
    //   this.esMiTurno()
    // }

    //Ahora es mi turno
    // En su turno puede pedir carta o plantarse
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
    }
  }

  saveMensajeFinal(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarMensajeFinal = false;
    }
  }

  // Muestra los jugadores sin cartas
  private listarNombresJugadores(): void {
    console.log("[~] Listando nombres de los jugadores...")
    // Obtener correos de los jugadores
    this.bjJuegoService.pedirNombresJugadores(this.idPartida).subscribe({
      next: (data: any) => {
        //Con data as String[]
        data as String[]
        console.log("[~] Los nombres de los jugadores obtenidos son... " + data)
        
        this.correosJugadores.push(data);
        // Quitar el correo del usuario de la lista 
        // data.forEach((correo: any) => {
        //   if (correo !== this.usuarioActivo) {
        //     this.correosJugadores.push(correo);
        //   }
        // });
      },
      error: (error: any) => {
        console.log("[x] Error al obtener los correos de los jugadores...");
        console.log(error);
      }
    })

    //Obtener los nombres de usuario de los jugadores y crear al jugador
    var id = 0;
    var jugadorAuxiliar = new Jugador(id, "banca", "Banca", []);
    this.listaJugadores.push(jugadorAuxiliar)
    this.correosJugadores.forEach(correo => {
      id++;
      this.usuarioService.obtenerUsuario(correo).subscribe({
      next: (data: any) => {
        data as Usuario;
          jugadorAuxiliar = new Jugador(id, correo, data.nombre, [])
          this.listaJugadores.push(jugadorAuxiliar);
          console.log("[+] Se ha añadido al jugador " + data.nombre + "a la lista de jugadores");
      },
      error: (error : any) => {
        console.log("[x] Error al obtener los datos del jugador con correo: " + correo + "...");
        console.log(error);
      }
    })
    })
  }

  private pedirCartasJugadorActivo() {
    console.log("[+] Obteniendo las cartas del jugdor activo con correo " + this.usuarioActivo + "...")
    this.bjJuegoService.pedirCartasJugador(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        data as string[]
        console.log("Cartas obtenidas: " + data)
        this.urlsCartasJugadorActivo.push(data);
      },
      error: (error: any) => {
        error as string
        console.log("[x] Error al obtener las cartas del usuario...");
        console.log(error);
      }
    })
    this.mostrarCartasJugadorActual();
  }

  private mostrarCartasJugadorActual() {
    var i = 0;
    this.urlsCartasJugadorActivo.forEach(url => {
      this.cartasUsuarioActivo.push({
        id: i + 1,
        src: "../../../assets/sources/juego/cartas/" + url
      });
      i++;
    });
  }

  private pedirCartasOtrosJugadores() {
    this.listaJugadores.forEach(jugador => {
      var cartas: string[] = []
      if (jugador.correoJugador !== "banca") {
        this.bjJuegoService.pedirCartasJugador(jugador.correoJugador, this.idPartida).subscribe({
          next: (data: any) => {
            data as string[]
            if (data.length === 0) {
              jugador.establecerCartas([])
            }
            else {
              var i = 0;
              var cartas: any[] = []
              data.forEach((cartaUrl: string) => {
                cartas.push({
                  id: i + 1,
                  src: "../../../assets/sources/juego/cartas/" + cartaUrl
                });
                i++;
              });
              jugador.establecerCartas(cartas)
              if (this.noEsFinPartida) {
                jugador.ocultarDosPrimerasCartas();
              }  
            }
          },
          error: (error: any) => {
            error as string
            console.log("[x] Error al obtener las cartas del jugador...");
            console.log(error);
          }
        })
      }
      else {
        this.bjJuegoService.pedirCartasCrupier(this.idPartida).subscribe({
          next: (data: any) => {
            data as string[]
            if (data.length === 0) {
              jugador.establecerCartas([])
            }
            else {
              var i = 0;
              var cartas: any[] = []
              data.forEach((cartaUrl: string) => {
                cartas.push({
                  id: i + 1,
                  src: "../../../assets/sources/juego/cartas/" + cartaUrl
                });
                i++;
              });
              jugador.establecerCartas(cartas)
            }
          },
          error: (error: any) => {
            error as string
            console.log("[x] Error al obtener las cartas de la banca...");
            console.log(error);
          }
        })
      }
    });
  }

  private esMiTurno() {
    this.bjJuegoService.esMiTurno(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        data as boolean
        if (data) {
          this.noEsMiTurno = false;
          this.finPartida()
        }
      },
      error: (error: any) => {
        console.log("Error al obtener si es mi turno...");
        console.log(error);
      }
    })
  }

  private finPartida() {
    while (this.noEsFinPartida) {
      this.bjJuegoService.finPartida(this.idPartida).subscribe({
        next: (data: any) => {
          data as string[]
          this.noEsFinPartida = false;
          this.listaGanadores = data;
        },
        error: (error: any) => {
          console.log("[x] La partida no ha terminado...");
          console.log(error);
        }
      })
    }
    
    //Mostrar ganadores:
    
  }

  // Acciones con botones en mi turno
  apostar() {
    this.bjJuegoService.apostar(this.usuarioActivo, this.apuesta, this.idPartida).subscribe({
      next: (data: any) => {
      },
      error: (error: any) => {
        console.log("Error al apostar");
        console.log(error);
      }
    })
  }

  pedirCarta() {
    this.bjJuegoService.pedirCarta(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        data as MensajePedirCarta;
        this.urlsCartasJugadorActivo.push(data.urlCarta);
        if (data.mensaje === "El jugador se ha pasado de 21") {
          this.noEsMiTurno = true;
          this.ElUserHaPerdido = "Has superado los 21 puntos. Has perdido"
        }
      },
      error: (error: any) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })
    this.mostrarCartasJugadorActual();
  }

  plantarse() {
    this.bjJuegoService.plantarse(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        this.noEsMiTurno = true
        this.finPartida()
      },
      error: (error: any) => {
        console.log("Error al plantarse");
        console.log(error);
      }
    })   
    this.finPartida()
  }

  abandonar() {
    // El jugaodr desea abandonar la partida
    this.bjJuegoService.retirarse(this.usuarioActivo, this.idPartida).subscribe({
      next: (data: any) => {
        console.log("[+] El usuario ha abandonado la partida...")
      },
      error: (error: any) => {
        console.log("[x] Error al abandonar la partida...");
        console.log(error);
      }
    })
  }

  resetearPartida() {
    // Reestablecer todos los valores

    // Reiniciar juego
    this.ngOnInit()
  }

  pausarPartida() {
    
  }









































































































  /*

  
  

 

  private pedirNumeroJugadores() {
    // this.bjJuegoService.numeroJugadores(this.idPartida).subscribe({
    //   next: (data: any) => {
    //     data as number
    //     this.numeroJugadores = data;
    //   },
    //   error: (error) => {
    //     console.log("Error al obtener el numero de jugadores");
    //     console.log(error);
    //   }
    // })
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
 


  
  
  

  
  
  */

}
