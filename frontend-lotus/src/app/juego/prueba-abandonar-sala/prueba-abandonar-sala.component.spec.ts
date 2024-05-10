import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAbandonarSalaComponent } from './prueba-abandonar-sala.component';

describe('PruebaAbandonarSalaComponent', () => {
  let component: PruebaAbandonarSalaComponent;
  let fixture: ComponentFixture<PruebaAbandonarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaAbandonarSalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaAbandonarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
