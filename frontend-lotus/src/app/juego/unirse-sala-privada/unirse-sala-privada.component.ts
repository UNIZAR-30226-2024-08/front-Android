import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
  tipoJuego !: any;
  usuarioActivo !: any;
  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object,private tipo: TipoJuegoService) {
    this.buildForm();
    if(isPlatformBrowser(this.platformId)){
      this.tipoJuego = localStorage.getItem("tipoDeJuego");
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: any) => {
      console.log(value);
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
      console.log(this.tipoJuego);
      this.tipo.UnirseSala(value,this.usuarioActivo).subscribe({
        next: (data: any) => {
          console.log(data);
          localStorage.setItem("codigoSala",value);
        },
        error: (error: any) => {
          console.log("Error al unirse a sala privada");
          console.log(error);
        }
      })
      // if(this.tipoJuego == "poker"){
      //   console.log('Uniendo a sala de poker');
      //   this.router.navigate(['/menu/poker_seleccion']);
      // } else if(this.tipoJuego == "blackjack"){
      //   this.router.navigate(['/menu/bj_seleccion']);
      // } 
    }else {
      console.log('Formulario no valido');
    }   
  }
}