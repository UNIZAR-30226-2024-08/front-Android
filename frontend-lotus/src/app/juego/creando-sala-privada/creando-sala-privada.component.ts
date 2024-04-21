import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creando-sala-privada',
  standalone: true,
  imports: [],
  templateUrl: './creando-sala-privada.component.html',
  styleUrl: './creando-sala-privada.component.css'
})
export class CreandoSalaPrivadaComponent {
   constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/juego/crear-sala-privada']); // Reemplaza 'otra-pantalla' por la ruta de la pantalla a la que quieres navegar
    }, 4000); // 4000 milisegundos = 4 segundos
  }
}
