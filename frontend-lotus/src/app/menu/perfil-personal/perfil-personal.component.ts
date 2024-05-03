import { Component } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { Constantes } from '../../../constants/constantes';
import { NavegacionPerfilComponent } from '../../shared/navegacion-perfil/navegacion-perfil.component';
import { CabeceraService } from '../../api/cabecera.service';
import { PersonalizablesService } from '../../api/personalizables.service';
import { strict } from 'assert';
import { error } from 'console';

@Component({
  selector: 'app-perfil-personal',
  standalone: true,
  imports: [CabeceraComponent, NavegacionPerfilComponent],
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css'
})


export class PerfilPersonalComponent {
  mostrarCartas = false;
  mostrarAvatar = false;

  rutaAvatar!: string
  nombreUsuario!: any;
  gmailUsuario!: any;
  

  listaCartas: any;
  listaAvatares: any;

  nuevoNombre!: string;

  

  constructor(private constantes: Constantes, private cabeceraService: CabeceraService,
              private personalizablesService: PersonalizablesService) {}

  ngOnInit(){
    this.constantes.personal = true;
    this.rutaAvatar = "../../../assets/sources/avatares/" + localStorage.getItem('avatar') + ".png";
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    this.gmailUsuario = localStorage.getItem('usuarioActivo');
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


}
