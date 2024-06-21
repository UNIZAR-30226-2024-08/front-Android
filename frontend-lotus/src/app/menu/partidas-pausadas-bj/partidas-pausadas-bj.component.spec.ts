import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasPausadasBJComponent } from './partidas-pausadas-bj.component';

describe('PartidasPausadasBJComponent', () => {
  let component: PartidasPausadasBJComponent;
  let fixture: ComponentFixture<PartidasPausadasBJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasPausadasBJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidasPausadasBJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
