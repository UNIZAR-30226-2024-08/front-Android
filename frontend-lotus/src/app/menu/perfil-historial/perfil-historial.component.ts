import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';
import { HistorialService } from '../../api/historial.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-perfil-historial',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-historial.component.html',
  styleUrl: './perfil-historial.component.css'
})
export class PerfilHistorialComponent {
  usuarioActivo: any
  partidas: any
  constructor(private tipo : HistorialService,@Inject(PLATFORM_ID) private platformId: Object){
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  ngOnInit() {
    this.tipo.obtenerHistorial(this.usuarioActivo).subscribe({
      next: (data) => {
        console.log(data);
        this.partidas = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
