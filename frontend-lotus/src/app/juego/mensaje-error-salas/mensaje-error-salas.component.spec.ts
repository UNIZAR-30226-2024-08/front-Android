import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeErrorSalasComponent } from './mensaje-error-salas.component';

describe('MensajeErrorSalasComponent', () => {
  let component: MensajeErrorSalasComponent;
  let fixture: ComponentFixture<MensajeErrorSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeErrorSalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajeErrorSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
