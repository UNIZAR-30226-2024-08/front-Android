import { Routes } from '@angular/router';
import { PerfilPersonalComponent } from './menu/perfil-personal/perfil-personal.component';

export const routes: Routes = [
{
    path: '',
    component: PerfilPersonalComponent
},
{
    path: 'login',
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
