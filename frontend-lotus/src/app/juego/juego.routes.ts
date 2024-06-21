import { Routes } from "@angular/router";
import { CrearSalaPrivadaComponent } from "./crear-sala-privada/crear-sala-privada.component";
import { CreandoSalaPrivadaComponent } from "./creando-sala-privada/creando-sala-privada.component";
import { UnirseSalaPrivadaComponent } from "./unirse-sala-privada/unirse-sala-privada.component";
import { BjMultiplayerComponent } from "./bj-multiplayer/bj-multiplayer.component";
import { BjOnePlayerComponent } from "./bj-one-player/bj-one-player.component";
import { PruebaAbandonarSalaComponent } from "./prueba-abandonar-sala/prueba-abandonar-sala.component";
import { MensajeErrorSalasComponent } from "./mensaje-error-salas/mensaje-error-salas.component";
import { MensajePartidasPausadasComponent } from "./mensaje-partidas-pausadas/mensaje-partidas-pausadas.component";
import { PokerMultiplayerComponent } from "./poker-multiplayer/poker-multiplayer.component";
import { CrearSalaPublicaComponent } from "./crear-sala-publica/crear-sala-publica.component";
import { PantallaCargaReanudarComponent } from "./pantalla-carga-reanudar/pantalla-carga-reanudar.component";


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
        path:'bj-one-player',
        component: BjOnePlayerComponent
    },
    {
        path: 'bj-multiplayer',
        title: 'BJ Multijugador',
        component: BjMultiplayerComponent
    },
    {
        path : 'poker-multiplayer',
        title: 'Poker Multijugador',
        component: PokerMultiplayerComponent
    },
    {
        path:'abandonar-sala',  
        component:PruebaAbandonarSalaComponent
    }, 
    {
        path:'mensaje-error.salas',
        component:MensajeErrorSalasComponent
    },
    {
        path:'mensaje-partidas-pausadas',
        component:MensajePartidasPausadasComponent
    },
    {
        path:'crear-sala-publica',
        component:CrearSalaPublicaComponent
    },
    {
        path:'pantalla-carga-reanudar',
        component:PantallaCargaReanudarComponent
    }
];