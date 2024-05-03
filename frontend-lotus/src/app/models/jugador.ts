import { Carta } from "./carta";

export class Jugador {
    id: number;
    nombreJugador: string;
    cartasJugador: Carta[];
    
    constructor(id: number, nombreJugador: string) {
        this.id = id;
        this.nombreJugador = nombreJugador;
        this.cartasJugador = [];
    }

    addCarta(carta: Carta) {
        this.cartasJugador.push(carta);
    }
}