export interface Partida {
    inicio: string;
    juego: string;
    cantidadGanada: number;
}
export interface Historial {
    partidas : Partida[];
}