export interface Partida {
    inicio: string;
    juego: string;
    monto: number;
}
export interface Historial {
    partidas : Partida[];
}