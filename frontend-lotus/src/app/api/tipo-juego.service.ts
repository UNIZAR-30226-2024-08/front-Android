import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoJuegoService {

  constructor() { }
  public tipoJuego$ = new BehaviorSubject<String>("");

  
}
