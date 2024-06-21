import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalaPublicaComponent } from './crear-sala-publica.component';

describe('CrearSalaPublicaComponent', () => {
  let component: CrearSalaPublicaComponent;
  let fixture: ComponentFixture<CrearSalaPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSalaPublicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSalaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
