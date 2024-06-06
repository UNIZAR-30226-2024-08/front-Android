export class MensajePedirCarta {
    urlCarta: string;
    mensaje: string;
    
    constructor(urlCarta: string, mensaje: string) {
        this.urlCarta = urlCarta;
        this.mensaje = mensaje;
    }
}