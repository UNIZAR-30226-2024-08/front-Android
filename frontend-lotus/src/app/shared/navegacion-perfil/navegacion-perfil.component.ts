import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Constantes } from '../../../constants/constantes';

@Component({
  selector: 'app-navegacion-perfil',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './navegacion-perfil.component.html',
  styleUrl: './navegacion-perfil.component.css'
})
export class NavegacionPerfilComponent {

  personal!: boolean
  tienda!: boolean
  historial!: boolean

  constructor(private constantes: Constantes) {}

  ngOnInit(){
    this.personal = this.constantes.personal;
    this.tienda = this.constantes.tienda;
    this.historial = this.constantes.historial;
  }

  irPersonal(){
    this.constantes.personal = true;
    this.constantes.tienda = false;
    this.constantes.historial = false;
  }
}
