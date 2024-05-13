import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GestorSalasService } from '../../api/gestor-salas.service';

@Component({
  selector: 'app-crear-sala-privada',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './crear-sala-privada.component.html',
  styleUrl: './crear-sala-privada.component.css'
})
export class CrearSalaPrivadaComponent {
  codigoSala: any = '123456';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object,private tipo: GestorSalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.codigoSala = localStorage.getItem("codigoSala");
    }
  }
  
  iniciarSala() {
    console.log("[+] Iniciando partida en sala con codigo: " + this.codigoSala +"...");
    this.tipo.iniciarSala(this.codigoSala).subscribe({
      next: (data: number) => {
        data as number
        console.log("[+] Se ha creado la partida con idPartida: " + data + "...")
        localStorage.setItem("codigoPartida", data.toString());

        //this.router.navigate(['/juego/abandonar-sala']);
        this.router.navigate(['/juego/bj-multiplayer'])
      },
      error: (error: any) => {
        console.log("Error al iniciar partida");
        console.log(error);
      }
    })
  }
  
}
