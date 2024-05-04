import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poker-seleccion-modo',
  standalone: true,
  imports: [CabeceraComponent,RouterModule],
  templateUrl: './poker-seleccion-modo.component.html',
  styleUrl: './poker-seleccion-modo.component.css'
})
export class PokerSeleccionModoComponent {
    constructor() {}

    ngOnInit(): void {
    }
}
