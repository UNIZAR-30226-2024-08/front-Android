import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-bj-multiplayer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bj-multiplayer.component.html',
  styleUrl: './bj-multiplayer.component.css'
})
export class BjMultiplayerComponent {
  form!: FormGroup;

  constructor(){
    this.buildForm();
  }
  
  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });
  }
  

  private buildForm(){
    this.form = new FormGroup({
      apuesta: new FormControl('',[Validators.required,Validators.min(10)])
    });
  }
  
  apuesta : number = 0;
  mostrarApuesta: boolean = true;
  
  save(event : Event){
    
    event.preventDefault();
    if(this.form.valid){
      this.mostrarApuesta = false;
      this.apuesta = Number(this.form.value.apuesta);
    }

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
