import { Component } from '@angular/core';
import { MiApiService } from './mi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-lotus';

  constructor(private miApiService: MiApiService) { }
  ngOnInit(): void {
    this.miApiService.getData().subscribe({
      next: (data: any) => {
        // Respuesta exitosa de la API
        console.log(data);
      },
      error: (error: any) => {
        // Manejar errores
        console.error('Error en la solicitud HTTP: ', error);
      }
    });
  }
}
