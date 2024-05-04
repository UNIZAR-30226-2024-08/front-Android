import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TipoJuegoService } from '../../api/tipo-juego.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-prueba-abandonar-sala',
  standalone: true,
  imports: [],
  templateUrl: './prueba-abandonar-sala.component.html',
  styleUrl: './prueba-abandonar-sala.component.css'
})
export class PruebaAbandonarSalaComponent {
  codigoSala: any ;
  usuarioActivo: any;
  constructor(private tipo: TipoJuegoService,@Inject(PLATFORM_ID) private platformId: Object) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  AbandonarSala(){
    console.log("Abandonando sala...");
    this.tipo.AbandonarSala(this.codigoSala,this.usuarioActivo).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log("Error al abandonar sala");
        console.log(error);
      }
    })
  }
}
