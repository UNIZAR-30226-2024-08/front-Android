import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSeleccionModoComponent } from './poker-seleccion-modo.component';

describe('PokerSeleccionModoComponent', () => {
  let component: PokerSeleccionModoComponent;
  let fixture: ComponentFixture<PokerSeleccionModoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokerSeleccionModoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokerSeleccionModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
