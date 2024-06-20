import { Component, Inject, Input, NgZone, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CabeceraService } from '../../api/cabecera.service';
import { Usuario } from '../../models/usuario';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Personalizable } from '../../models/personalizables';
import { PersonalizablesService } from '../../api/personalizables.service';


declare var google: any;

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
  
 
export class CabeceraComponent implements OnInit{

  private usuarioActivo: any;
  
 
  @Input() nombreUsuario!: string;
  @Input() saldoUsuario!: string;
  @Input() rutaAvatar!: string;


  constructor(private cabeceraService: CabeceraService , @Inject(PLATFORM_ID) private platformId: Object, private personalizablesService: PersonalizablesService) {
    if(isPlatformBrowser(this.platformId)){
      this.usuarioActivo = localStorage.getItem("usuarioActivo");
    }
  }


  private router = inject(Router);
  ngZone: NgZone = inject(NgZone);

  
  ngOnInit(): void {
    this.obtenerUsuario()
    this.personalizablesService.obtenerAvatarUsuario(this.usuarioActivo).subscribe({
      next: (data: any) => {
        console.log("El avatar es: "+data.nombre);
        if(this.rutaAvatar == null){
          this.rutaAvatar = this.obtenerRutaAvatar(data.nombre);
        }
      },
      error: (error: any) => {
        console.log("Error al obtener el avatar del usuario");
        console.log(error);
      }
    });
  }

  obtenerUsuario(){
    console.log("Obteniendo los datos del jugador...");
    console.log(this.usuarioActivo);
    this.cabeceraService.obtenerUsuario(this.usuarioActivo)
    .subscribe({
      next: (data: any) => {
        
        data as Usuario;
        if(this.nombreUsuario == null){
          this.nombreUsuario = data.nombre;
        }
        if(this.saldoUsuario == null){
          this.saldoUsuario = data.saldo;
        }
      },
      error: (error) => {
        console.log("Error al obtener los datos del jugador");
        console.log(error);
      }
    })

  }
  

  obtenerRutaAvatar(avatar: string){
    return "../../../assets/sources/avatares/" + avatar + ".png";
  }

  cerrarSesion(){
    console.log("Cerrando sesión...");
    sessionStorage.removeItem("clave");
    google.accounts.id.disableAutoSelect();
    this.cabeceraService.cerrarSesion(this.usuarioActivo)
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.ngZone.run(() => this.router.navigate(['/']));
      },
      error: (error: any) => {
        console.log("Error al cerrar la sesión");
        console.log(error);
      }
    })
  }
}