import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoJuegoService } from '../../api/tipo-juego.service';
@Component({
  selector: 'app-creando-sala-privada',
  standalone: true,
  imports: [],
  templateUrl: './creando-sala-privada.component.html',
  styleUrl: './creando-sala-privada.component.css'
})
export class CreandoSalaPrivadaComponent {
  
  constructor(private router: Router,private tipo :TipoJuegoService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/juego/crear-sala-privada']); // Redirige a la ruta /juego/crear-sala-privada
    }, 4000); // 4000 milisegundos = 4 segundos
    this.tipo.tipoJuego$.subscribe(data => {console.log(`El valor de la variable cambio a: ${data}`);});
  }
}
