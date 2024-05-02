import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-bj-one-player',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bj-one-player.component.html',
  styleUrl: './bj-one-player.component.css'
})
export class BjOnePlayerComponent implements OnInit{

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
  mostrarApuesta : boolean = true;

  // checkoutFrom = this.fb.group({
  //   apuesta : FormGroup
  // });

  // constructor(private fb: FormBuilder) { }
  
  // onSubmit(): void {
  //   /*mensaje de apuesta realizada*/
  //   this.checkoutFrom.value.apuesta = this.checkoutFrom.value.apuesta;
  //   //console.log(this.checkoutFrom.value.apuesta);
  //   this.apuesta = Number(this.checkoutFrom.value.apuesta);
  //   //console.log(this.apuesta);
  //   this.checkoutFrom.reset();
  //   this.mostrarApuesta = false;   
  // }
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
