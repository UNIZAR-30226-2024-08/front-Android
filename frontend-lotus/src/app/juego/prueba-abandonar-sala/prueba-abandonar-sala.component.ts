import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { GestorSalasService } from '../../api/gestor-salas.service';
import { isPlatformBrowser } from '@angular/common';
import { SalasService } from '../../api/salas.service';

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
  constructor(private tipo: GestorSalasService,@Inject(PLATFORM_ID) private platformId: Object, private unirseASalasService: SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  abandonarSala(){
    console.log("Abandonando sala...");
    this.unirseASalasService.abandonarSala();
  }
}
