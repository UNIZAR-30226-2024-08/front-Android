export class Jugador {
    id: number;
    correoJugador: string;
    nombreJugador: string;
    cartasJugador: any[] = []; //URLS completas de las cartas
    
    constructor(id: number, correoJugador: string, nombreJugador: string, cartas: String[]) {
        this.id = id;
        this.correoJugador = correoJugador;
        this.nombreJugador = nombreJugador;

        for (let i = 0; cartas.length; i++){
            this.cartasJugador.push({
                id: i + 1,
                src: cartas[i]
            });
        }            
    }

    
    establecerCartas(cartas: String[]) {
        this.cartasJugador = cartas;
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