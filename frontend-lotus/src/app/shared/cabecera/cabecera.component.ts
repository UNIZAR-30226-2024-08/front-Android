import { Component, Input, OnInit } from '@angular/core';
import { CabeceraService } from '../../api/cabecera.service';
import { Usuario } from '../../models/usuario';
import { Constantes } from '../../../constants/constantes';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
  

 
export class CabeceraComponent implements OnInit{

  private usuarioActivo: any;
  nombreUsuario!: string;
  saldoUsuario!: string;
  imgURL = '../../../assets/sources/inicio/avatarPorDefecto_01.png';

  constructor(private cabeceraService: CabeceraService, constante: Constantes) {
    this.usuarioActivo = constante.usuarioActivo;
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
      }
    })

  }



}


/*interface UsuarioInterface{
    gmail: string;
    nombre: string
    saldo: number
    autenticacion: string;
    actualizado: boolean;
}*/