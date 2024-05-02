//https://developers.google.com/identity/gsi/web/guides/overview?hl=es-419 -- Pagina web
//https://www.youtube.com/watch?v=EO-U01u9vFQ -- Video



import { Component } from '@angular/core';
import {NgZone } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../api/usuarios.service';
 
declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  gmailUsuario!: string;
  nombreUsuario!: string;
  usuarioJson: any;


  constructor( private userService: UsuariosService) {
  }

  private router = inject(Router);
  ngZone: NgZone = inject(NgZone);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined'){
      google.accounts.id.initialize({
        client_id: '287725710191-56khg274chrdgkt1o8idkhl5g42o8522.apps.googleusercontent.com',
        callback: (resp: any) => this.controlarLogin(resp)
      });
    }
  }
  private generarNombreUsuario(gmail: string){
    return gmail.split('@')[0];
  }

  private decodificarToken(token: string){
    return JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1]))));
  }

  loginWithGoogle() {
    google.accounts.id.prompt();
  }

  controlarLogin(respuesta: any){
    if(respuesta){
      //Hay que decodificar el token
      const loadToken: string = this.decodificarToken(respuesta.credential);

      //Guardar el token en el local storage, user es un JSON
      this.usuarioJson = JSON.stringify(loadToken);
      sessionStorage.setItem("loggedUser", this.usuarioJson);
      //Guardar el gmail del usuario
      const usuarioObjeto = JSON.parse(this.usuarioJson);
      //Aqui esta el gmail del usuario
      this.gmailUsuario = usuarioObjeto.email;
      this.nombreUsuario= this.generarNombreUsuario(this.gmailUsuario);
      //Cambiar el usuario activo
      localStorage.setItem('usuarioActivo', this.gmailUsuario);

      this.userService.iniciarSesion(this.gmailUsuario, this.nombreUsuario).subscribe({
        next: (res: any) => {
          console.log(res);
          //El ngZone se pone para solventar este error: Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?
          this.ngZone.run(() => this.router.navigate(['/menu']));
        },
        error: (err: any) => {
          console.log('Error al iniciar sesion');
          console.log(err);
        }
      })
    }
  }
}
