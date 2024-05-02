import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseSalaPrivadaComponent } from './unirse-sala-privada.component';

describe('UnirseSalaPrivadaComponent', () => {
  let component: UnirseSalaPrivadaComponent;
  let fixture: ComponentFixture<UnirseSalaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnirseSalaPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnirseSalaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
