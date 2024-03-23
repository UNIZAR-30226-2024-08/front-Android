import { Routes } from '@angular/router';
import { InicioSeleccionJuegoComponent } from './menu/inicio-seleccion-juego/inicio-seleccion-juego.component';

export const routes: Routes = [
{
    path: '',
    component: InicioSeleccionJuegoComponent

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
