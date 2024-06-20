import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tipo-partida-seleccion',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './tipo-partida-seleccion.component.html',
  styleUrl: './tipo-partida-seleccion.component.css'
})
export class TipoPartidaSeleccionComponent {

  rutaReanudar!: string
  ruta!: string;
  tipoJuego: any;
  constructor() {}
  ngOnInit(){
    this.tipoJuego=localStorage.getItem('tipoJuego');
    console.log(this.tipoJuego);
    if(this.tipoJuego=="poker"){
      this.ruta="/menu/poker_seleccion";
    } else if(this.tipoJuego=="blackjack"){
      this.ruta="/menu/bj_seleccion";
      this.rutaReanudar="/menu/partidas_BJ_pausadas";
    }
    console.log(this.ruta);
  }

}
