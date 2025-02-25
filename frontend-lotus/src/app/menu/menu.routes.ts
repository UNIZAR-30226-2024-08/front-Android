import { Routes } from "@angular/router";
import { InicioSeleccionJuegoComponent } from "./inicio-seleccion-juego/inicio-seleccion-juego.component";
import { BjSeleccionModoComponent } from "./bj-seleccion-modo/bj-seleccion-modo.component";
import { PokerSeleccionModoComponent } from "./poker-seleccion-modo/poker-seleccion-modo.component";
import { PerfilPersonalComponent } from "./perfil-personal/perfil-personal.component";
import { PerfilHistorialComponent } from "./perfil-historial/perfil-historial.component";
import { PerfilTiendaComponent } from "./perfil-tienda/perfil-tienda.component";
import { TipoPartidaSeleccionComponent } from "./tipo-partida-seleccion/tipo-partida-seleccion.component";
import { PartidasPausadasBJComponent } from "./partidas-pausadas-bj/partidas-pausadas-bj.component";

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
    },
    {
        path: 'perfil_historial',
        title: 'perfil_historial',
        component: PerfilHistorialComponent
    },
    {
        path: 'perfil_tienda',
        title: 'perfil_tienda',
        component: PerfilTiendaComponent
    },
    {
        path:'tipo_partida_seleccion',
        component: TipoPartidaSeleccionComponent
    },
    {
        path: 'partidas_BJ_pausadas',
        title: 'partidas_BJ_pausadas',
        component: PartidasPausadasBJComponent
    }
];