import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';

@Component({
  selector: 'app-perfil-historial',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-historial.component.html',
  styleUrl: './perfil-historial.component.css'
})
export class PerfilHistorialComponent {

}
