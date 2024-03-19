import { Component, OnInit } from '@angular/core';
import { MiApiService } from './api/mi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend-lotus';

  constructor(private miApiService: MiApiService) { }
  ngOnInit(): void {
    this.miApiService.getHolaMundo().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  get_Hola_Mundo(){
    
  }
}
