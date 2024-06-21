import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SalasService } from '../../api/salas.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bj-seleccion-modo',
  standalone: true,
  imports: [CabeceraComponent,RouterOutlet,RouterModule],
  templateUrl: './bj-seleccion-modo.component.html',
  styleUrl: './bj-seleccion-modo.component.css'
})
export class BjSeleccionModoComponent {

  private rutaCrearSala: string = 'wss://casino-backend.azurewebsites.net/BJ/crearSala'
  private aforo: number = 1;
  private tipoSala: string = "privada";
  private usuarioActivo: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private salasService : SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo"); 
    }
  } 

  ngOnInit(): void {
  }
  
  crearSalaOneplayer(){
    console.log("Crear sala one player");
    this.salasService.crearSalaSocket(this.rutaCrearSala, this.usuarioActivo, this.tipoSala, this.aforo);
  }
  crearSalaPublica() {
    this.salasService.crearSalaSocket(this.rutaCrearSala, this.usuarioActivo, "publica", 7);
  }
}
