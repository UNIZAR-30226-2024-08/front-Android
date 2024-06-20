import { Component } from '@angular/core';
import { SalasService } from '../../api/salas.service';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';


@Component({
  selector: 'app-partidas-pausadas-bj',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './partidas-pausadas-bj.component.html',
  styleUrl: './partidas-pausadas-bj.component.css'
})
export class PartidasPausadasBJComponent {
  
  private usuarioActivo: string = localStorage.getItem('usuarioActivo') || '';
  listaPartidasPausadas: any[] = [
    {
      codigo: '1'
    },
    {
      codigo: '2'
    },
    {
      codigo: '3'
    }
  ];
  
  constructor(private sockeService: SalasService) {}
  
  ngOnInit(){
  }
  
  reanudar(codigo: string) {
    throw new Error('Method not implemented.');
  }
}
