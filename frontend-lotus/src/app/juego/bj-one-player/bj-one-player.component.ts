import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-bj-one-player',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bj-one-player.component.html',
  styleUrl: './bj-one-player.component.css'
})
export class BjOnePlayerComponent{

  apuesta : number = 0;
  mostrarApuesta : boolean = true;

  checkoutFrom = this.fb.group({
    apuesta : FormGroup
  });

  constructor(private fb: FormBuilder) { }
  
  onSubmit(): void {
    /*mensaje de apuesta realizada*/
    this.checkoutFrom.value.apuesta = this.checkoutFrom.value.apuesta;
    //console.log(this.checkoutFrom.value.apuesta);
    this.apuesta = Number(this.checkoutFrom.value.apuesta);
    //console.log(this.apuesta);
    this.checkoutFrom.reset();
    this.mostrarApuesta = false;   
  }

  
  cartas: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 3,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 4,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 5,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 6,
      src: "../../../assets/sources/juego/reverso.jpg"
    }
  ];
  cartasUsu: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 3,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 4,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 5,
      src: "../../../assets/sources/juego/carta.jpg"
    }
  ];
}
