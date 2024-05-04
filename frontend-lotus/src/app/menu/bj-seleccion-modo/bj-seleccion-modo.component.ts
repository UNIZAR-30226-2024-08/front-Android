import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bj-seleccion-modo',
  standalone: true,
  imports: [CabeceraComponent,RouterOutlet,RouterModule],
  templateUrl: './bj-seleccion-modo.component.html',
  styleUrl: './bj-seleccion-modo.component.css'
})
export class BjSeleccionModoComponent {

  constructor() {}

  ngOnInit(): void {
  }
  
}
