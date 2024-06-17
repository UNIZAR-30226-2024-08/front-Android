import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID, inject } from '@angular/core';
import {  FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { GestorSalasService } from '../../api/gestor-salas.service';
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
  codigoSala !: any;
  private rutaCrearSala: string = 'wss://casino-backend.azurewebsites.net/BJ/unirseSala';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object,private tipo: GestorSalasService) {
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
      if (typeof window !== 'undefined'){
        const self = this;
        console.log(this.usuarioActivo, this.codigoSala);
        const socketCrearSala = new WebSocket(`${this.rutaCrearSala}/${this.codigoSala}/${this.usuarioActivo}`);
        
        socketCrearSala.addEventListener('open', function (event) {
          console.log('Conexión establecida para unirse a la sala');
        });
        
        socketCrearSala.addEventListener('message', function (res) {  
          console.log('Mensaje del servidor:', res.data);
          let data = JSON.parse(res.data);
          //Gestionar la respuesta del servidor
          if(data.accion == 'unirse'){
            console.log('unirse a sala')
            this.close();
            self.ngZone.run(() => self.router.navigate(['/juego/abandonar-sala']));
          }
  
        });
        socketCrearSala.addEventListener('close', function (event) {
          console.log('Conexión cerrada');
        });
        socketCrearSala.addEventListener('error', function (event) {
          console.log('Error:', event);
        });
      }
    }else {
      console.log('Formulario no valido');
    }   
  }
}