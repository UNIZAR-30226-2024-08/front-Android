import { TestBed } from '@angular/core/testing';

import { TipoJuegoService } from './tipo-juego.service';

describe('TipoJuegoService', () => {
  let service: TipoJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
