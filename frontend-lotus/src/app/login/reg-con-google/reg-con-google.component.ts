//https://developers.google.com/identity/gsi/web/guides/overview?hl=es-419 -- Pagina web
//https://www.youtube.com/watch?v=EO-U01u9vFQ -- Video

declare var google: any;

import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from '../../../constants/constantes';

@Component({
  selector: 'app-reg-con-google',
  standalone: true,
  imports: [],
  templateUrl: './reg-con-google.component.html',
  styleUrl: './reg-con-google.component.css'
})
export class RegConGoogleComponent implements OnInit{

  gmailUsuario: any;

  constructor(varGlobal: Constantes) {
    varGlobal.usuarioActivo = this.gmailUsuario;
  }

  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '287725710191-56khg274chrdgkt1o8idkhl5g42o8522.apps.googleusercontent.com',
      callback: (resp: any) => this.controlarLogin(resp)
    });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: 'filled_blue',
        size: 'large',
        with: 350,
        shape: 'circle'
      });
  }

  private decodificarToken(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }

  controlarLogin(respuesta: any){
    if(respuesta){
      //Hay que decodificar el token
      const loadToken = this.decodificarToken(respuesta.credential);
      //Guardar el token en el local storage
      sessionStorage.setItem("loggedUser", JSON.stringify(loadToken));
      this.gmailUsuario = JSON.stringify(loadToken);
      this.router.navigate(['/menu'])

    }
  }
}


