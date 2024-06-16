import { Component, Inject, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GestorSalasService } from '../../api/gestor-salas.service';
import { Socket } from 'node:dgram';
@Component({
  selector: 'app-creando-sala-privada',
  standalone: true,
  imports: [],
  templateUrl: './creando-sala-privada.component.html',
  styleUrl: './creando-sala-privada.component.css'
})
export class CreandoSalaPrivadaComponent {

  private rutaCrearSala: string = 'wss://casino-backend.azurewebsites.net/BJ/crearSala'
  private aforo: number = 4;
  private tipoSala: string = "privada";

  private usuarioActivo: any;

  
  // private tipoSala: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private tipo: GestorSalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo"); 
    }
  } 
  ngZone: NgZone = inject(NgZone);
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined'){
      const self = this;
      const socketCrearSala = new WebSocket(`${this.rutaCrearSala}/${this.usuarioActivo}/${this.tipoSala}/${this.aforo}`);
      
      socketCrearSala.addEventListener('open', function (event) {
        console.log('Conexión establecida para crear sala la sala');
      });
      
      socketCrearSala.addEventListener('message', function (res) {  
        console.log('Mensaje del servidor:', res.data);
        let data = JSON.parse(res.data);
        //Gestionar la respuesta del servidor
        if(data.accion == 'crear'){
          console.log('sala creada')
          localStorage.setItem("codigoSala",data.codigo);
          self.ngZone.run(() => self.router.navigate(['/juego/crear-sala-privada']));
        }


      });

      socketCrearSala.addEventListener('close', function (event) {
        console.log('Conexión cerrada');
      });

      socketCrearSala.addEventListener('error', function (event) {
        console.log('Error:', event);
      });


    }


  }
  navegarASala(){
    //Aqui se crea la sala
    
  }
}
