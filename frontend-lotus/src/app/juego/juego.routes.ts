import { Routes } from "@angular/router";
import { BjOnePlayerComponent } from "./bj-one-player/bj-one-player.component";

export const JUEGO_ROUTES: Routes = [
    {
        path: 'bj_one_player',
        title: 'bj_one_player',
        component: BjOnePlayerComponent
    }
];