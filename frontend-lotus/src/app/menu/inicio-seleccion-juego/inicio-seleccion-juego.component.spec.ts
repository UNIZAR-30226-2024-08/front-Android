import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSeleccionJuegoComponent } from './inicio-seleccion-juego.component';

describe('InicioSeleccionJuegoComponent', () => {
  let component: InicioSeleccionJuegoComponent;
  let fixture: ComponentFixture<InicioSeleccionJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSeleccionJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioSeleccionJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
