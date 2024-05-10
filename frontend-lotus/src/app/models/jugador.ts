import { Carta } from "./carta";

export class Jugador {
    id: number;
    nombreJugador: string;
    cartasJugador: any[] = [];
    
    constructor(id: number, nombreJugador: string, cartas: String[]) {
        this.id = id;
        this.nombreJugador = nombreJugador;

        for (let i = 0; cartas.length; i++){
            this.cartasJugador.push({
                id: i + 1,
                src: cartas[i]
            });
        }    
    }

    addCarta(cartas: String) {
        for (let i = 0; cartas.length; i++){
            this.cartasJugador.push({
                id: i + 1,
                src: cartas[i]
            });
        }   
    }

    ocultarDosPrimerasCartas() {
        this.cartasJugador[0] = "../../../assets/sources/juego/reverso.jpg";
        this.cartasJugador[1] = "../../../assets/sources/juego/reverso.jpg";
    }

    mostrarTodasLasCartas(): any {
        return this.cartasJugador;
    }

    mostrarSoloCartasPedidas():any {
        var cartasPedidas = this.cartasJugador;
        cartasPedidas[0] = "../../../assets/sources/juego/reverso.jpg";
        cartasPedidas[1] = "../../../assets/sources/juego/reverso.jpg";
        return cartasPedidas;
    }
}