import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
    
export class Constantes{

  public setUser(usuario: string) {
    this.usuarioActivo = usuario;
  }

    public usuarioActivo: string = 'none';

}