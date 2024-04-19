import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio-seleccion-juego',
  standalone: true,
  imports: [CabeceraComponent, RouterOutlet, RouterModule],
  templateUrl: './inicio-seleccion-juego.component.html',
  styleUrl: './inicio-seleccion-juego.component.css'
})
export class InicioSeleccionJuegoComponent{

}
