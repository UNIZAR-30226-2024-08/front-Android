import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCargaReanudarComponent } from './pantalla-carga-reanudar.component';

describe('PantallaCargaReanudarComponent', () => {
  let component: PantallaCargaReanudarComponent;
  let fixture: ComponentFixture<PantallaCargaReanudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaCargaReanudarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaCargaReanudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
