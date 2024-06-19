import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mensaje-error-salas',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './mensaje-error-salas.component.html',
  styleUrl: './mensaje-error-salas.component.css'
})
export class MensajeErrorSalasComponent {
  mensajeError: string | null = null;
  constructor() { 
    this.mensajeError = localStorage.getItem("mensajeError"); 
  }

}
