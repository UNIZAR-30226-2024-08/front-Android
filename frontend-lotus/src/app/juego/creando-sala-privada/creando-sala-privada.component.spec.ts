import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandoSalaPrivadaComponent } from './creando-sala-privada.component';

describe('CreandoSalaPrivadaComponent', () => {
  let component: CreandoSalaPrivadaComponent;
  let fixture: ComponentFixture<CreandoSalaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreandoSalaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreandoSalaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
