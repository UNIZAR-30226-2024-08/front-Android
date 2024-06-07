import { Injectable } from '@angular/core';
import { Personalizable } from '../app/models/personalizables';
import { UnaryOperator } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
    
export class Constantes{

  //En que parte del perfil nos encontramos
  public personal = false;
  public tienda = false;
  public historial = false;

  public url: string = 'https://casino-backend.azurewebsites.net';
}