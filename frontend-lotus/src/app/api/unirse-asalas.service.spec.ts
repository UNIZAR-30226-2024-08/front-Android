import { TestBed } from '@angular/core/testing';

import { UnirseASalasService } from './unirse-asalas.service';

describe('UnirseASalasService', () => {
  let service: UnirseASalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnirseASalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
