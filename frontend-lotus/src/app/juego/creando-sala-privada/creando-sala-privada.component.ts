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
      this.router.navigate(['/juego/crear-sala-privada']); // Redirige a la ruta /juego/crear-sala-privada
    }, 4000); // 4000 milisegundos = 4 segundos
  }
}
