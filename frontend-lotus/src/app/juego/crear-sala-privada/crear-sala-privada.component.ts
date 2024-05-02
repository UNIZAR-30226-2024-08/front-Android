import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-sala-privada',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './crear-sala-privada.component.html',
  styleUrl: './crear-sala-privada.component.css'
})
export class CrearSalaPrivadaComponent {
  codigoSala: string= '123456';
  
}
