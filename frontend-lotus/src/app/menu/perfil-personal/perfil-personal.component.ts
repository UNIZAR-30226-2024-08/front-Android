import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Constantes } from '../../../constants/constantes';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css'
})


export class PerfilPersonalComponent {
  mostrarCartas = false;
  mostrarAvatar = false;

  listaCartas: any;
  listaAvatares: any;

  constructor(private constantes: Constantes) {}

  ngOnInit(){
    this.listaCartas=this.constantes.listaCartas;
    this.listaAvatares=this.constantes.listaAvatares;
    this.constantes.personal = true;
  }

  idCarta(): number{
    return this.constantes.getCarta();
  }

  idAvatar(): number{
    return this.constantes.getAvatar();
  }

  verCartas() {
    this.mostrarCartas = !this.mostrarCartas;
    this.mostrarAvatar = false;
  }
  verAvatar() {
    this.mostrarAvatar = !this.mostrarAvatar;
    this.mostrarCartas = false;
  }


}
