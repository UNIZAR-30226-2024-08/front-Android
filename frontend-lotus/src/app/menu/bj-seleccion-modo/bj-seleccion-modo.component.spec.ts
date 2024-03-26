import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjSeleccionModoComponent } from './bj-seleccion-modo.component';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';

describe('BjSeleccionModoComponent', () => {
  let component: BjSeleccionModoComponent;
  let fixture: ComponentFixture<BjSeleccionModoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BjSeleccionModoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BjSeleccionModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
