import { Routes } from "@angular/router";
import { InicioSeleccionJuegoComponent } from "./inicio-seleccion-juego/inicio-seleccion-juego.component";
import { BjSeleccionModoComponent } from "./bj-seleccion-modo/bj-seleccion-modo.component";
import { PokerSeleccionModoComponent } from "./poker-seleccion-modo/poker-seleccion-modo.component";
import { PerfilPersonalComponent } from "./perfil-personal/perfil-personal.component";

export const MENU_ROUTES: Routes = [
    {
        path: '',
        title: 'seleccion-juego',
        component: InicioSeleccionJuegoComponent
    },
    {
        path: 'bj_seleccion',
        title: 'bj_seleccion-juego',
        component: BjSeleccionModoComponent
    },
    {
        path: 'poker_seleccion',
        title: 'poker_seleccion-juego',
        component: PokerSeleccionModoComponent
    },
    {
        path: 'perfil_personal',
        title: 'perfil_personal',
        component: PerfilPersonalComponent
    }
];