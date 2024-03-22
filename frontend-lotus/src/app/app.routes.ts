import { Routes } from '@angular/router';

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
