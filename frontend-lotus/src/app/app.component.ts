import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiApiService } from './api/mi-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_lotus';

  constructor(private miApiService: MiApiService) {}

  ngOnInit(): void {
    console.log('AppComponent ngOnInit()');
    this.miApiService.getHolaMundo().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  getHolaMundo() {}
}

