import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { TipoJuegoService } from '../../api/tipo-juego.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unirse-sala-privada',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './unirse-sala-privada.component.html',
  styleUrl: './unirse-sala-privada.component.css'
})
export class UnirseSalaPrivadaComponent implements OnInit{
  form !: FormGroup;
  tipoJuego !: string;
  constructor(private tipo :TipoJuegoService,private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
    });
    this.tipo.tipoJuego$.subscribe(data => {
      console.log(`El valor de la variable cambio a: ${data}`);
      this.tipoJuego = data as string;
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
    });
  }
  
  save(event: Event) {
    event.preventDefault();
    /*Cambiar a las rutas de juego correspondientes*/
    if (this.form.valid) {
      const value = this.form.value.codigo;
      console.log(value);
      if(this.tipoJuego == "poker"){
        console.log('Uniendo a sala de poker');
        this.router.navigate(['/menu/poker_seleccion']);
      } else if(this.tipoJuego == "blackjack"){{
        this.router.navigate(['/menu/bj_seleccion']);
      }
    } else {
      console.log('Formulario no valido');
    }  
  } 

  }
}