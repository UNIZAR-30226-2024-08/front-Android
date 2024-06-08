import { Component, Inject, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { GestorSalasService } from '../../api/gestor-salas.service';
import { bjJuegoService } from '../../api/bj-juego.service';

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

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private tipo: GestorSalasService, private bj: bjJuegoService) {
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
        this.tipo.iniciarSala(data.codigo).subscribe({
          next: (data: any) => {
            console.log("Sala iniciada con éxito");
            // Obtener el idPartida al iniciar la sala
            localStorage.setItem("idPartida", data.idPartida);
            this.bj.iniciarPartida(data.idPartida).subscribe({
              next: (data: any) => {
                console.log("Partida iniciada con éxito");
              },
              error: (error: any) => {
                console.log("Error al iniciar partida");
                console.log(error);
              }
            });
          },
          error: (error: any) => {
            console.log("Error al iniciar sala");
            console.log(error);
          }
        });
      },
      error: (error: any) => {
        console.log("Error al crear sala privada");
        console.log(error);
      }
      
    })
  }
}
