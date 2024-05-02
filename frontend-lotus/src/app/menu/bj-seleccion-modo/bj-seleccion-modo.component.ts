import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { CreandoSalaPrivadaComponent } from '../../juego/creando-sala-privada/creando-sala-privada.component';
import { TipoJuegoService } from '../../api/tipo-juego.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bj-seleccion-modo',
  standalone: true,
  imports: [CabeceraComponent,RouterOutlet,RouterModule],
  templateUrl: './bj-seleccion-modo.component.html',
  styleUrl: './bj-seleccion-modo.component.css'
})
export class BjSeleccionModoComponent {

  constructor(private tipo: TipoJuegoService) {}

  ngOnInit(): void {
    // Your code here
    this.tipo.tipoJuego$.next("blackjack");
  
  }
}
