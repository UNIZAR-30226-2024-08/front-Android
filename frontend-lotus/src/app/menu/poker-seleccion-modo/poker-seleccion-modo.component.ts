import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';
import { SalasService } from '../../api/salas.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-poker-seleccion-modo',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './poker-seleccion-modo.component.html',
  styleUrl: './poker-seleccion-modo.component.css'
})
export class PokerSeleccionModoComponent {

  private rutaCrearSala: string = 'wss://casino-backend.azurewebsites.net/poker/crearSala'

  private usuarioActivo: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private salasService : SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo"); 
    }
  } 
  ngOnInit(): void {
  }

  crearSalaPublica() {
    this.salasService.crearSalaSocket(this.rutaCrearSala, this.usuarioActivo, "publica", 7);
  }
}
