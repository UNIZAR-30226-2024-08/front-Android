import { Injectable } from '@angular/core';
import { Personalizable } from '../app/models/personalizables';


@Injectable({
  providedIn: 'root'
})
    
export class Constantes{


  public usuarioActivo: string = 'none';

  private cartaSeleccionada: number = 1;
  private avatarSeleccionado: number = 1;

  public getCarta(): number{
    return this.cartaSeleccionada;
  }

  public getAvatar(): number{
    return this.avatarSeleccionado;
  }

  public seleccionarCartas(id: number): void{
    this.listaCartas[id].seleccionado = true;
    this.listaCartas[this.cartaSeleccionada].seleccionado = false;
  }

  public seleccionarAvatar(id: number): void{
    this.listaAvatares[id].seleccionado = true;
    this.listaAvatares[this.avatarSeleccionado].seleccionado = false;
  }

  listaCartas: Personalizable[] = [
    {
      id: 1,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 2,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 3,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 4,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 5,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 6,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 7,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 8,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    },
    {
      id: 9,
      src: "../../../assets/sources/inicio/cartasPoker_01.png",
      seleccionado: false
    }
  ];

  listaAvatares: Personalizable[] = [
    {
      id: 1,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png",
      seleccionado: false
    },
    {
      id: 2,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png",
      seleccionado: false
    },
    {
      id: 3,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png",
      seleccionado: false
    },
    {
      id: 4,
      src: "../../../assets/sources/inicio/avatarPorDefecto_01.png",
      seleccionado: false
    }
  ]

}