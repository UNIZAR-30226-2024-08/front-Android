import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SalasService } from '../../api/salas.service';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { UsuariosService } from '../../api/usuarios.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-partidas-pausadas-bj',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './partidas-pausadas-bj.component.html',
  styleUrl: './partidas-pausadas-bj.component.css'
})
export class PartidasPausadasBJComponent {
  
  private usuarioActivo: string = localStorage.getItem('usuarioActivo') || '';
  listaPartidasPausadas: any[] = [];
  juego!: string;
  private rutaSocket: string = 'wss://casino-backend.azurewebsites.net/';
  private ruta: string = '';
  
  constructor(private usuarioService: UsuariosService,private salasService: SalasService,@Inject(PLATFORM_ID) private platformId: Object) {
    if(isPlatformBrowser(this.platformId)){
      this.juego=localStorage.getItem('tipoJuego') === 'poker' ? this.juego = 'poker' : this.juego = 'BJ';
    }
    this.usuarioService.obtenerPartidasPausadas(this.usuarioActivo,this.juego).subscribe((res: any) => {
      this.listaPartidasPausadas = res;
      console.log(res);
    });
  }
  
  
  reanudar(codigo: string) {
    this.ruta = this.rutaSocket + '/' + this.juego + '/reanudarSala/'; 
    this.salasService.reanudarSocket('wss://casino-backend.azurewebsites.net/BJ/reanudarSala/', codigo, this.usuarioActivo);
  }
}
