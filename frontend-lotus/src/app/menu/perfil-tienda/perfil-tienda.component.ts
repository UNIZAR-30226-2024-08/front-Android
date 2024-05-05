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

  listaAvataresComprar!: any;

  avatarSeleccionado!: string;
  gmailUsuario!: any;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.gmailUsuario = localStorage.getItem('usuarioActivo');
    this.tiendaService.obtenerAvataresTineda().subscribe({
      next: (data: any) => {
        this.listaAvataresComprar = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  crearRutaAvatar(nombreAvatar: string): string{
    return "../../../assets/sources/avatares/" + nombreAvatar + ".png";
  }

  mostrarAvisoCompra(): void{
    //Cojemos el div con el id avisoCompra
    const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
    avisoCompra.style.display = "block";
  }

  seleccionarAvatar(nombreAvatar: string): void{
    this.avatarSeleccionado = nombreAvatar;
    this.mostrarAvisoCompra();
  }

  cancelarCompra(): void{
    const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
    avisoCompra.style.display = "none";
    this.avatarSeleccionado = "";
  }

  comprarAvatar(){
    this.tiendaService.comprarAvatar(this.gmailUsuario, this.avatarSeleccionado, "Avatar").subscribe({
      next(data: any){
        console.log(data);
      },
      error(error: any){
        console.error(error);
      }
    });
  }

}
