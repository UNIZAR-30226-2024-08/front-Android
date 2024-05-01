import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CabeceraService } from '../../api/cabecera.service';
import { Usuario } from '../../models/usuario';
import { RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
  

 
export class CabeceraComponent implements OnInit{

  private usuarioActivo: any;
  nombreUsuario!: string;
  saldoUsuario!: string;
  imgURL = '../../../assets/sources/inicio/avatarPorDefecto_01.png';


  constructor(private cabeceraService: CabeceraService , @Inject(PLATFORM_ID) private platformId: Object) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }
  
  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){
    console.log("Obteniendo los datos del jugador...");
    this.cabeceraService.obtenerUsuario(this.usuarioActivo)
    .subscribe({
      next: (data: any) => {
        data as Usuario;
        this.nombreUsuario = data.nombre; 
        this.saldoUsuario = data.saldo;
      },
      error: (error) => {
        console.log("Error al obtener los datos del jugador");
        console.log(error);
      }
    })

  }
}