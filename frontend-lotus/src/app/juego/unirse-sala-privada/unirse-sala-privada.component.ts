import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID, inject } from '@angular/core';
import {  FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { RouterModule } from '@angular/router';
import { UnirseASalasService } from '../../api/unirse-asalas.service';

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
  codigoSala !: any;
  private rutaUnirseSala: string = 'wss://casino-backend.azurewebsites.net/BJ/unirseSala';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object, private unirseASalasService: UnirseASalasService) {
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

  ngZone: NgZone = inject(NgZone);

  private buildForm() {
    this.form = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
    });
  }
  
  save(event: Event) {
    event.preventDefault();
    /*Cambiar a las rutas de juego correspondientes*/
    if (this.form.valid) {
      this.codigoSala = this.form.value.codigo;
      console.log(this.codigoSala);
      console.log(this.tipoJuego);
      this.unirseASalasService.unirseASala(this.rutaUnirseSala, this.codigoSala, this.usuarioActivo);
    }else {
      console.log('Formulario no valido');
    }   
  }
}