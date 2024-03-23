import { Routes } from '@angular/router';
import { PokerSeleccionModoComponent } from './menu/poker-seleccion-modo/poker-seleccion-modo.component';
import { BjSeleccionModoComponent } from './menu/bj-seleccion-modo/bj-seleccion-modo.component';
import { InicioSeleccionJuegoComponent } from './menu/inicio-seleccion-juego/inicio-seleccion-juego.component';

export const routes: Routes = [
{
    path: '',
    component:BjSeleccionModoComponent

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
