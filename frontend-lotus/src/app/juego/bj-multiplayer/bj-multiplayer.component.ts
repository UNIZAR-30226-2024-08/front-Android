import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
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
  form!: FormGroup;
  jugadores: Usuario | undefined;
  cartasJugadorActual: Carta[] = [];
  url!: string;
  apuesta : number = 0;
  mostrarApuesta: boolean = true;
  nuevaCarta: Carta | undefined;
  numeroCarta: number = 1;
  ElUserHaPerdido: String = ""
  listaJugadores: Jugador[] = []

  cartasDeUsuario: Carta[] = []

  constructor(private bjJuegoService : bjJuegoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  
  ngOnInit(): void {
    //Obtener jugadores
    this.bjJuegoService.pedirOtrosJugadores(this.usuarioActivo).subscribe({
      next: (data: any) => {
        //Completar
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })

    //Obtener cartas iniciales del jugador
    this.pedirCarta()
    this.pedirCarta()

    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });
  }

  private buildForm(){
    this.form = new FormGroup({
      apuesta: new FormControl('10',[Validators.required,Validators.min(10)])
    });
  }
  
  save(event : Event){
    event.preventDefault();
    if(this.form.valid){
      this.mostrarApuesta = false;
      this.apuesta = Number(this.form.value.apuesta);
    }

  }

  pedirCarta() {
    //Pedir carta al backend
    this.pedirCartaAlBackend()
    
    //Preguntar al backend si me he pasado de 21
    this.bjJuegoService.meHePasadoDe21(this.usuarioActivo).subscribe({
      next: (data: Boolean) => {
        if (data) {
          this.ElUserHaPerdido = "Has excedido el limite de 21 puntos. Has perdido"
        }
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })
  }
  
  pedirCartaAlBackend() {
    this.bjJuegoService.pedirCartaJugadorActual(this.usuarioActivo).subscribe({
      next: (data: any) => {
        data as String;
        this.url = data; 
        this.nuevaCarta = new Carta(this.numeroCarta, this.url);
        this.numeroCarta = this.numeroCarta + 1;
        this.cartasDeUsuario.push(this.nuevaCarta);
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })
  }

  plantarse() {
    
  }

  cartasBanca: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/reverso.jpg"
    }
  ];
}
