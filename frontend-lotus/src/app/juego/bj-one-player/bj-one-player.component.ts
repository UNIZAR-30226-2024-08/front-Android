import { Component } from '@angular/core';

@Component({
  selector: 'app-bj-one-player',
  standalone: true,
  imports: [],
  templateUrl: './bj-one-player.component.html',
  styleUrl: './bj-one-player.component.css'
})
export class BjOnePlayerComponent {
  cartas: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 3,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 4,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 5,
      src: "../../../assets/sources/juego/reverso.jpg"
    },
    {
      id: 6,
      src: "../../../assets/sources/juego/reverso.jpg"
    }
  ];
  cartasUsu: any= [
    {
      id: 1,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 2,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 3,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 4,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 5,
      src: "../../../assets/sources/juego/carta.jpg"
    },
    {
      id: 6,
      src: "../../../assets/sources/juego/carta.jpg"
    }
  ];
}
