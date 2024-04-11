//https://developers.google.com/identity/gsi/web/guides/overview?hl=es-419 -- Pagina web
//https://www.youtube.com/watch?v=EO-U01u9vFQ -- Video

declare var google: any;


import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '',
      callback: (resp: any) => {
      }
    });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: 'filled_blue',
        size: 'large',
        with: 400,
        shape: 'rectangular'
      });
  }
}
