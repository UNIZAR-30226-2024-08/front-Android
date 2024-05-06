import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';
import { TiendaService } from '../../api/tienda.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-perfil-tienda',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-tienda.component.html',
  styleUrl: './perfil-tienda.component.css'
})
export class PerfilTiendaComponent {

  listaAvataresComprar!: any;
  listaCartasComprar!: any;
  avatarSeleccionado!: string;
  gmailUsuario!: any;
  tipoPersonalizable!: string;
  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
    avisoCompra.style.display = "none";
    const avisoCompra2 = document.getElementsByClassName("mensaje2")[0] as HTMLElement;
    avisoCompra2.style.display = "none";
    this.gmailUsuario = localStorage.getItem('usuarioActivo');
    this.tiendaService.obtenerAvataresTineda(this.gmailUsuario).subscribe({
      next: (data: any) => {
        this.listaAvataresComprar = data;
        console.log(data);
      },   
      error: (error: any) => {
        console.error(error);
      }
    })
    this.tiendaService.obtenerCartasTineda(this.gmailUsuario).subscribe({
      next: (data: any) => {
        this.listaCartasComprar = data;
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
    this.tipoPersonalizable = "Avatar";
    this.mostrarAvisoCompra();
  }
  seleccionarCarta(nombreCarta: string): void{
    this.avatarSeleccionado = nombreCarta;
    this.tipoPersonalizable = "Cartas";
    this.mostrarAvisoCompra();
  }
  cancelarCompra(): void{
    const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
    avisoCompra.style.display = "none";
    this.avatarSeleccionado = "";
  }
  mensajeSaldo(){
    const avisoCompra = document.getElementsByClassName("mensaje2")[0] as HTMLElement;
    avisoCompra.style.display = "none";
    this.avatarSeleccionado = "";
  }
  comprarAvatar(){
    this.tiendaService.comprarPersonalizable(this.gmailUsuario, this.avatarSeleccionado, this.tipoPersonalizable).subscribe({
      next(data: any){
        const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
        avisoCompra.style.display = "none";
        this.avatarSeleccionado = "";
        location.reload();
      },
      error(error: any){
        console.error(error);
        if(error.status == 400){
          console.log("No tienes suficientes monedas");
          const avisoCompra = document.getElementsByClassName("mensaje")[0] as HTMLElement;
          avisoCompra.style.display = "none";
          const avisoCompra2= document.getElementsByClassName("mensaje2")[0] as HTMLElement;
          avisoCompra2.style.display = "block";
        }
      }
    });
  }

}
