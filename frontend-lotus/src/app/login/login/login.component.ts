//https://developers.google.com/identity/gsi/web/guides/overview?hl=es-419 -- Pagina web
//https://www.youtube.com/watch?v=EO-U01u9vFQ -- Video


import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
}
