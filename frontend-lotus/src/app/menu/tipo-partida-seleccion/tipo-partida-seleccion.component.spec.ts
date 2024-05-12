import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPartidaSeleccionComponent } from './tipo-partida-seleccion.component';

describe('TipoPartidaSeleccionComponent', () => {
  let component: TipoPartidaSeleccionComponent;
  let fixture: ComponentFixture<TipoPartidaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPartidaSeleccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoPartidaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
