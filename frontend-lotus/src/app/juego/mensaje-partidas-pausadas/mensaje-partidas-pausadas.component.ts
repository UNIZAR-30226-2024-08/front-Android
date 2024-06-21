import { Component, OnInit } from '@angular/core';
import { PersonalizablesService } from '../../api/personalizables.service';
import { SalasService } from '../../api/salas.service';

@Component({
  selector: 'app-mensaje-partidas-pausadas',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-partidas-pausadas.component.html',
  styleUrl: './mensaje-partidas-pausadas.component.css'
})
export class MensajePartidasPausadasComponent{
  constructor(private salasService: SalasService) { 
  }
  pausar(){
    this.salasService.pausarPartida();
  }
  abandonar(){
    this.salasService.abandonarSala();
  }
}
