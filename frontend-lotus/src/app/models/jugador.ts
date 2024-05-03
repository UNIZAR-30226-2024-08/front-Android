import { Carta } from "./carta";

export class Jugador {
    nombreJugador: string;
    cartasJugador: Carta[];
    
    constructor(nombreJugador: string) {
        this.nombreJugador = nombreJugador;
        this.cartasJugador = [];
    }

    addCarta(carta: Carta) {
        this.cartasJugador.push(carta);
    }
}