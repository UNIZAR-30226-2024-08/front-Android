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
    this.personal = localStorage.getItem('personal')== 'true';
    this.tienda =  localStorage.getItem('tienda')== 'true';
    this.historial = localStorage.getItem('historial')== 'true';
  }

  irPersonal(){
    localStorage.setItem('personal', 'true');
    localStorage.setItem('tienda', 'false');
    localStorage.setItem('historial', 'false');
  }

  irHistorial(){
    localStorage.setItem('personal', 'false');
    localStorage.setItem('tienda', 'false');
    localStorage.setItem('historial', 'true');
  }

  irTienda(){
    localStorage.setItem('personal', 'false');
    localStorage.setItem('tienda', 'true');
    localStorage.setItem('historial', 'false');

  }
}
