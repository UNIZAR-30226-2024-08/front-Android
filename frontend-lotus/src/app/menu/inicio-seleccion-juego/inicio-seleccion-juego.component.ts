import { Component, HostListener, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CabeceraService } from '../../api/cabecera.service';

@Component({
  selector: 'app-inicio-seleccion-juego',
  standalone: true,
  imports: [CabeceraComponent, RouterOutlet, RouterModule],
  templateUrl: './inicio-seleccion-juego.component.html',
  styleUrl: './inicio-seleccion-juego.component.css'
})
export class InicioSeleccionJuegoComponent{

  private usuarioActivo: string | null = null;


  constructor(private cabeceraService: CabeceraService) {

  }

  pulsarPoker(){
    localStorage.setItem("tipoJuego", "poker");
    console.log("Pulsado poker");
  }
  pulsarBlackjack(){
    localStorage.setItem("tipoJuego", "blackjack");
    console.log("Pulsado blackjack");
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.usuarioActivo = localStorage.getItem('usuarioActivo');
    if(this.usuarioActivo != null){
      this.cabeceraService.cerrarSesion(this.usuarioActivo).subscribe({
        next : (res:any) => {
          console.log('Usuario esta cerrando sesion...');
          
        },
        error : (err:any) => {
          console.log(err);
        }
      })
    }
  }
}
