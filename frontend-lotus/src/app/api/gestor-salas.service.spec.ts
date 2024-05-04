import { TestBed } from '@angular/core/testing';

import { GestorSalasService } from './gestor-salas.service';

describe('TipoJuegoService', () => {
  let service: GestorSalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorSalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
