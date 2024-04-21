import { Routes } from "@angular/router";
import { CrearSalaPrivadaComponent } from "./crear-sala-privada/crear-sala-privada.component";
import { CreandoSalaPrivadaComponent } from "./creando-sala-privada/creando-sala-privada.component";

export const JUEGO_ROUTES: Routes = [
    { 
        path: 'crear-sala-privada',
        component: CrearSalaPrivadaComponent
    },
    {
        path:'creando-sala-privada',
        component: CreandoSalaPrivadaComponent
    }
];