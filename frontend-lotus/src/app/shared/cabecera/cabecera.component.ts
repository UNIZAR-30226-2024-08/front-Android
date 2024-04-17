import { Component, Input, OnInit } from '@angular/core';
import { CabeceraService } from '../../api/cabecera.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit{


   @Input() currentUsuario: Usuario = {
    gmail: usuarioActual,
    nombreUsuario: '',
    saldo: 0
  }

  constructor(private cabeceraService: CabeceraService) {}
  
  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){
    console.log("Obteniendo los datos del jugador...");
    this.cabeceraService.obtenerUsuario(usuarioActivo)
    .subscribe({
      next: (data) => {
        this.currentUsuario = data;
      }
    })

  }



}
