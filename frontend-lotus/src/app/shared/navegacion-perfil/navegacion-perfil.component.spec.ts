import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPerfilComponent } from './navegacion-perfil.component';

describe('NavegacionPerfilComponent', () => {
  let component: NavegacionPerfilComponent;
  let fixture: ComponentFixture<NavegacionPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
