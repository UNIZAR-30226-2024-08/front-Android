import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css'
})


export class PerfilPersonalComponent {
  mostrarCartas = false;
  mostrarAvatar = false;

  verCartas() {
    this.mostrarCartas = !this.mostrarCartas;
    this.mostrarAvatar = false;
  }
  verAvatar() {
    this.mostrarAvatar = !this.mostrarAvatar;
    this.mostrarCartas = false;
  }

  listaCartas: any= [
    {
      id: 1,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 2,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 3,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 4,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 5,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 6,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 7,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 8,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    },
    {
      id: 9,
      src: "../../../assets/sources/inicio/cartasPoker_01.png"
    }
  ];

  listaAvatares: any = [
    {
      id: 1,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 2,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 3,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 4,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 5,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 6,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 7,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 8,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    },
    {
      id: 9,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png"
    }
  ]

}
