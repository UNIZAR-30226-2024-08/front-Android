import { Component, HostListener, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CabeceraService } from '../../api/cabecera.service';
import { SalasService } from '../../api/salas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio-seleccion-juego',
  standalone: true,
  imports: [CabeceraComponent, RouterOutlet, RouterModule],
  templateUrl: './inicio-seleccion-juego.component.html',
  styleUrl: './inicio-seleccion-juego.component.css'
})
export class InicioSeleccionJuegoComponent{

  private usuarioActivo: string | null = null;
  hayRecompensa: boolean = false;
  nombreRecompensa: string = '';
  private sub!: Subscription;

  constructor(private cabeceraService: CabeceraService, private recompensaService: SalasService) {

    console.log(this.nombreRecompensa);
  }

  ngOnInit(): void {
    this.sub = this.recompensaService.mensajeRecompensa.subscribe((data) => {
      console.log(data);
      console.log("Nuevo mensaje recibido");
      this.hayRecompensa = true;
      this.nombreRecompensa = data.personalizable;
    });
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  pulsarPoker(){
    localStorage.setItem("tipoJuego", "poker");
    console.log("Pulsado poker");
  }
  pulsarBlackjack(){
    localStorage.setItem("tipoJuego", "blackjack");
    console.log("Pulsado blackjack");
  }

  crearRuta(): string{
    return `../../../assets/sources/avatares/${this.nombreRecompensa}.png`
  }

  aceptarRecompensa(){
    this.hayRecompensa = false;
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.usuarioActivo = localStorage.getItem('usuarioActivo');
    if(this.usuarioActivo != null){
      this.cabeceraService.cerrarSesion(this.usuarioActivo).subscribe({
        next : (res:any) => {
          console.log('Usuario esta cerrando sesion...');
          
        },
        error : (err:any) => {
          console.log(err);
        }
      })
    }
  }
}
