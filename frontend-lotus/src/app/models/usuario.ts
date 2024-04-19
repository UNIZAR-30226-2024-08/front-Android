export class Usuario {
    gmail: string;
    nombre: string
    saldo: number
    autenticacion: string;
    actualizado: boolean;
    
    constructor(nombre: string, gmail: string, autenticacion: string, saldo: number) {
        this.nombre = nombre;
        this.gmail = gmail;
        this.saldo = saldo;
        this.autenticacion = autenticacion;
        this.actualizado = true;
    }
}