import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePartidasPausadasComponent } from './mensaje-partidas-pausadas.component';

describe('MensajePartidasPausadasComponent', () => {
  let component: MensajePartidasPausadasComponent;
  let fixture: ComponentFixture<MensajePartidasPausadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajePartidasPausadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajePartidasPausadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
