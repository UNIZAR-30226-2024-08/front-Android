import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Constantes } from '../../../constants/constantes';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';
import { CabeceraService } from '../../api/cabecera.service';
import { PersonalizablesService } from '../../api/personalizables.service';
import { Observable } from 'rxjs';
import { Personalizable, listaAvatares } from '../../models/personalizables';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [AsyncPipe,CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css'
})


export class PerfilPersonalComponent {
  mostrarCartas = false;
  mostrarAvatar = false;

  avatarUsuario!: any;
  nombreUsuario!: any;
  gmailUsuario!: any;

  rutaAvatar!: string;
  

  listaAvataresMostrar!: any;

  listaCartas: any;
  // listaAvatares: any;

  nuevoNombre!: string;

  

  constructor(private constantes: Constantes, private cabeceraService: CabeceraService,
              private personalizablesService: PersonalizablesService) {}

  ngOnInit(){
    this.constantes.personal = true;
    this.avatarUsuario = localStorage.getItem('avatar');
    this.rutaAvatar = "../../../assets/sources/avatares/" + this.avatarUsuario + ".png";
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    this.gmailUsuario = localStorage.getItem('usuarioActivo');
    this.personalizablesService.obtenerAvataresDesbloqueados(this.gmailUsuario).subscribe({
      next: (data: any) => {
        this.listaAvataresMostrar = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    
    });
  }
  
  mostrarCartasFunc(){
    this.mostrarCartas = !this.mostrarCartas;
    this.mostrarAvatar = false;
  }

  mostrarAvatarFunc(){
    this.mostrarAvatar = !this.mostrarAvatar;
    this.mostrarCartas = false;
  }

  crearRutaAvatar(avatar: string){
    return "../../../assets/sources/avatares/" + avatar + ".png";
  
  }

  mostrarAviso(){
    const textoOculto = document.getElementById("mensajeOculto");
    
    if(textoOculto != null){
      console.log(textoOculto.style.display)
      textoOculto.style.display = "block";
    }
  }

  cambiarNombre(){
    const input = document.getElementById("nombreinput") as HTMLInputElement;
    const textoOculto = document.getElementById("mensajeOculto");
    
    if(textoOculto != null){
      console.log(textoOculto.style.display)
      textoOculto.style.display = "none";
    }

    if(input != null){
      this.nuevoNombre = input.value;
      this.personalizablesService.cambiarNombre(this.gmailUsuario, this.nuevoNombre).subscribe({
        next: (data: any) => {
          localStorage.setItem('nombreUsuario', this.nuevoNombre);
          location.reload();
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }
  }

  cambiarAvatar(avatar: string){
    this.personalizablesService.cambiarAvatar(this.gmailUsuario, avatar).subscribe({
      next: (data: any) => {
        localStorage.setItem('avatar', avatar);
        console.log(data.mesaje);
        // this.rutaAvatar = this.crearRutaAvatar(avatar);
        // this.avatarUsuario = avatar;
        location.reload();
        
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
