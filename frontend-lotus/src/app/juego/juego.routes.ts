import { Routes } from "@angular/router";
import { CrearSalaPrivadaComponent } from "./crear-sala-privada/crear-sala-privada.component";
import { CreandoSalaPrivadaComponent } from "./creando-sala-privada/creando-sala-privada.component";
import { UnirseSalaPrivadaComponent } from "./unirse-sala-privada/unirse-sala-privada.component";
import { BjMultiplayerComponent } from "./bj-multiplayer/bj-multiplayer.component";
import { BjOnePlayerComponent } from "./bj-one-player/bj-one-player.component";
import { PruebaAbandonarSalaComponent } from "./prueba-abandonar-sala/prueba-abandonar-sala.component";

export const JUEGO_ROUTES: Routes = [
    { 
        path: 'crear-sala-privada',
        component: CrearSalaPrivadaComponent
    },
    {
        path:'creando-sala-privada',
        component: CreandoSalaPrivadaComponent
    },
    {
        path:'unirse-sala-privada',
        component: UnirseSalaPrivadaComponent
    },
    {
        path:'bj-multiplayer',
        component: BjMultiplayerComponent
    },
    {
        path:'bj-one-player',
        component: BjOnePlayerComponent
    },
    {
        path:'abandonar-sala',  
        component:PruebaAbandonarSalaComponent
    }
];