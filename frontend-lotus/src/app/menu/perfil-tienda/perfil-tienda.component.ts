import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';
import { TiendaService } from '../../api/tienda.service';
import { Observable } from 'rxjs';
import { listaAvatares } from '../../models/personalizables';

@Component({
  selector: 'app-perfil-tienda',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-tienda.component.html',
  styleUrl: './perfil-tienda.component.css'
})
export class PerfilTiendaComponent {

  listaAvatares$!: Observable<listaAvatares>;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.tiendaService.obtenerAvataresTineda().subscribe({
      next: (data: any) => {
        this.listaAvatares$ = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

}
