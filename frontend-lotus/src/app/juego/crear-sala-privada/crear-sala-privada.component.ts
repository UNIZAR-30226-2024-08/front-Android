import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';

@Component({
  selector: 'app-crear-sala-privada',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './crear-sala-privada.component.html',
  styleUrl: './crear-sala-privada.component.css'
})
export class CrearSalaPrivadaComponent {
  codigoSala: string= '123456';
  
}
