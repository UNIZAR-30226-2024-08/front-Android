import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SalasService } from '../../api/salas.service';
@Component({
  selector: 'app-crear-sala-publica',
  standalone: true,
  imports: [],
  templateUrl: './crear-sala-publica.component.html',
  styleUrl: './crear-sala-publica.component.css'
})
export class CrearSalaPublicaComponent {
  codigoSala: any = '123456';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object,private salasService: SalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
    }
  }
  
  iniciarSala() {
    console.log("[+] Iniciando partida en sala con código: " + this.codigoSala +"...");
    this.salasService.iniciarSala();

  }

  abandonarSala() {
    this.salasService.abandonarSala();
  }
}
