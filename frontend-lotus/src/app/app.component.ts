import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiApiService } from './api/mi-api.service';
import { CabeceraService } from './api/cabecera.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_lotus';

  usuarioActivo: string | null = null;

  constructor(private miApiService: MiApiService, private cabeceraService: CabeceraService) {
  }

  ngOnInit(): void {
    // console.log('AppComponent ngOnInit()');
    // this.miApiService.getHolaMundo().subscribe({
    //   next: (res: any) => {
    //     console.log("Res");
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // });
    
    
    }
    
    @HostListener('window:beforeunload', ['$event'])
    handleKeyDown(event: any) {
      this.usuarioActivo = localStorage.getItem('usuarioActivo');
      if(this.usuarioActivo != null){
        this.cabeceraService.cerrarSesion(this.usuarioActivo).subscribe({
          next : (res:any) => {
            console.log('Usuario cerrando sesion...');
            
          },
          error : (err:any) => {
            console.log(err);
          }
        })
      }
    }
    
    

  getHolaMundo() {}
}


