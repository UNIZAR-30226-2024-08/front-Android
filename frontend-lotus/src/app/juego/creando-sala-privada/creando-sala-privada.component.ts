import { Component, Inject, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GestorSalasService } from '../../api/gestor-salas.service';
@Component({
  selector: 'app-creando-sala-privada',
  standalone: true,
  imports: [],
  templateUrl: './creando-sala-privada.component.html',
  styleUrl: './creando-sala-privada.component.css'
})
export class CreandoSalaPrivadaComponent {


  private usuarioActivo: any;
  
  private tipoSala: boolean = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private tipo: GestorSalasService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
      
    }
  }
  ngZone: NgZone = inject(NgZone);
  ngAfterViewInit(): void {
    this.crearSalaPrivada();
    
  }
  crearSalaPrivada(){
    console.log("Creando sala privada...");

    this.tipo.crearSalaPrivada(this.usuarioActivo, this.tipoSala).subscribe({
      next: (data: any) => {
        localStorage.setItem("codigoSala", data.codigo);
        console.log(data.codigo);
        this.ngZone.run(() => this.router.navigate(['/juego/crear-sala-privada']));
      },
      error: (error: any) => {
        console.log("Error al crear sala privada");
        console.log(error);
      }
      
    })
  }
}
