import { Routes } from '@angular/router';
import { PerfilPersonalComponent } from './menu/perfil-personal/perfil-personal.component';
import { LoginComponent } from './login/login/login.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';

export const routes: Routes = [
{
    path: '',
    loadChildren: ()=> import('./login/login.routes').then(m => m.LOGIN_ROUTES)
},

{
    path: 'menu',
    loadChildren: ()=> import('./menu/menu.routes').then(m => m.MENU_ROUTES)
},

{
    path: 'juego',
    loadChildren: ()=> import('./juego/juego.routes').then(m => m.JUEGO_ROUTES)
}

];
