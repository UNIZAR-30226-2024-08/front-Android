import { Component } from '@angular/core';
import { MiApiService } from './api/mi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-lotus';

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
