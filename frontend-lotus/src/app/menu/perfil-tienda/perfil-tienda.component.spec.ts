import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTiendaComponent } from './perfil-tienda.component';

describe('PerfilTiendaComponent', () => {
  let component: PerfilTiendaComponent;
  let fixture: ComponentFixture<PerfilTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilTiendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
