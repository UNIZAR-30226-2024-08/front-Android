import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalaPrivadaComponent } from './crear-sala-privada.component';

describe('CrearSalaPrivadaComponent', () => {
  let component: CrearSalaPrivadaComponent;
  let fixture: ComponentFixture<CrearSalaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSalaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSalaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
