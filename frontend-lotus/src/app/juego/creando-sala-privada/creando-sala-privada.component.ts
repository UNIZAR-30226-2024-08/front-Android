import { Component, Inject, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GestorSalasService } from '../../api/gestor-salas.service';
import { Socket } from 'node:dgram';
import { SalasService } from '../../api/salas.service';
@Component({
  selector: 'app-creando-sala-privada',
  standalone: true,
  imports: [],
  templateUrl: './creando-sala-privada.component.html',
  styleUrl: './creando-sala-privada.component.css'
})
export class CreandoSalaPrivadaComponent {

  private rutaCrearSala!: string;
  private aforo: number = 4;
  private tipoSala: string = "privada";
  private usuarioActivo: any;
  private juego!: string | null;
  ngZone: NgZone = inject(NgZone);
  
  // private tipoSala: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private salasService : SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo"); 
      this.juego = localStorage.getItem("tipoJuego");
      this.rutaCrearSala = (this.juego === "poker") ? 'wss://casino-backend.azurewebsites.net/poker/crearSala' : 'wss://casino-backend.azurewebsites.net/BJ/crearSala';
    }
  } 
  
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && this.usuarioActivo) {
      this.salasService.crearSalaSocket(this.rutaCrearSala, this.usuarioActivo, this.tipoSala, this.aforo);
    }
  }
}
