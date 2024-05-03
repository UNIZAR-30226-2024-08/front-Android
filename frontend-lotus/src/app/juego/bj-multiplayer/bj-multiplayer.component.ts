import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Carta } from '../../models/carta';
import { bjJuegoService } from '../../api/bj-juego.service';

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

  constructor(private bjJuegoService : bjJuegoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.buildForm();
    //Obener el usuario actual
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  
  ngOnInit(): void {
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
    this.bjJuegoService.pedirCartaJugadorActual(this.usuarioActivo).subscribe({
      next: (data: any) => {
        data as Carta;
        this.url = data.url; 
        this.cartasJugadorActual.push(data);
      },
      error: (error) => {
        console.log("Error al obtener la carta del jugador");
        console.log(error);
      }
    })
  }

  cartasDelUsuario: any;

  cartas: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/reverso.jpg"
    }
  ];

  cartasUsu: any = [
    {
      id: 1,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/carta.jpg"
    }
  ];
}
