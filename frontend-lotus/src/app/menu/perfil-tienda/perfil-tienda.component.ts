import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';

@Component({
  selector: 'app-perfil-tienda',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-tienda.component.html',
  styleUrl: './perfil-tienda.component.css'
})
export class PerfilTiendaComponent {

}
