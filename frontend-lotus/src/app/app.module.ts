import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Aquí hay que poner los componentes que tengamos
    AppComponent
  ],
  imports: [
    // Aquí se añaden otros módulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Para usar el protocolo HTTP
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
