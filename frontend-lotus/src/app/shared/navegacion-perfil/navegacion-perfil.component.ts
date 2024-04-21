import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navegacion-perfil',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './navegacion-perfil.component.html',
  styleUrl: './navegacion-perfil.component.css'
})
export class NavegacionPerfilComponent {

  personal = true;
  tienda = false;
  historial = false;

  constructor() {}

  public pantallaPersonal(){
    this.personal = true;
    this.tienda = false;
    this.historial = false;
  }

  public pantallaTienda(){
    this.personal = false;
    this.tienda = true;
    this.historial = false;
  }

  public pantallaHistorial(){
    this.personal = false;
    this.tienda = false;
    this.historial = true;
  }

}
