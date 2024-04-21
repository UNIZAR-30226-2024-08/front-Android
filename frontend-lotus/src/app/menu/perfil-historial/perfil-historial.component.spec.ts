import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHistorialComponent } from './perfil-historial.component';

describe('PerfilHistorialComponent', () => {
  let component: PerfilHistorialComponent;
  let fixture: ComponentFixture<PerfilHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilHistorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
