import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TipoJuegoService } from '../../api/tipo-juego.service';

@Component({
  selector: 'app-crear-sala-privada',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './crear-sala-privada.component.html',
  styleUrl: './crear-sala-privada.component.css'
})
export class CrearSalaPrivadaComponent {
  codigoSala: any= '123456';

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private tipo: TipoJuegoService) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
      
    }
  }
  iniciarSala(){
    console.log("Iniciando partida...");
    this.tipo.IniciarSala(this.codigoSala).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log("Error al iniciar partida");
        console.log(error);
      }
    })
  }
  
}
