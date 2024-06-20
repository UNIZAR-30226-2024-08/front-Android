import { Carta } from "./carta";
import { PersonalizablesService } from "../api/personalizables.service";

export class Jugador {

    constructor(private personalizablesService: PersonalizablesService) {}

    gmail: string = "";
    saldo: number = 0;
    apuesta: number = 0;
    estaRetirado: boolean = false;
    cartas: Carta[] = [];



    
    establecerCartas(cartas: Carta[]) {
        this.cartas = cartas;
    }

    ocultarDosPrimerasCartas() {
        this.cartas[0].palo = "../../../assets/sources/juego/reverso.jpg";
        this.cartas[1].palo = "../../../assets/sources/juego/reverso.jpg";
    }

    mostrarTodasLasCartas(): any {
        return this.cartas;
    }

    mostrarSoloCartasPedidas():any {
        var cartasPedidas = this.cartas;
        cartasPedidas[0].palo = "../../../assets/sources/juego/reverso.jpg";
        cartasPedidas[1].palo = "../../../assets/sources/juego/reverso.jpg";
        return cartasPedidas;
    }
}