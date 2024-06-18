import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SalasService } from '../../api/salas.service';

@Component({
  selector: 'app-crear-sala-privada',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './crear-sala-privada.component.html',
  styleUrl: './crear-sala-privada.component.css'
})
export class CrearSalaPrivadaComponent {
  codigoSala: any = '123456';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object,private salasService: SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
    }
  }
  
  iniciarSala() {
    console.log("[+] Iniciando partida en sala con código: " + this.codigoSala +"...");
    const mensaje = { "accion": "iniciar" };
    this.salasService.sendMessage(mensaje);

  }

  abandonarSala() {
    this.salasService.abandonarSala();
  }
  
}
