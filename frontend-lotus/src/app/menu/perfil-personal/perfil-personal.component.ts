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
  public mostrarFichas(): void {
    var container: HTMLElement = <HTMLElement>document.getElementsByClassName("mostrar")[0];
    if(container.style.display == "none"){
      container.style.display = "block";
    }
    else{
      container.style.display = "none";
    }
  }

  fichas: any= [
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
}
