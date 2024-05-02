import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalizablesService {
  private url = 'https://casino-backend.azurewebsites.net';
  constructor(private httpClient: HttpClient) { }
}
