import { Component } from '@angular/core';
import { SalasService } from '../../api/salas.service';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { UsuariosService } from '../../api/usuarios.service';


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
  
  constructor(private usuarioService: UsuariosService,private salasService: SalasService) {
    this.usuarioService.obtenerPartidasPausadas(this.usuarioActivo).subscribe((res: any) => {
      this.listaPartidasPausadas = res;
      console.log(res);
    });
  }
  
  
  reanudar(codigo: string) {
    this.salasService.reanudarSocket('wss://casino-backend.azurewebsites.net/BJ/reanudarSala/', codigo, this.usuarioActivo);
  }
}
