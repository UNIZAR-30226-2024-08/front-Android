import { TestBed } from '@angular/core/testing';

import { PersonalizablesService } from './personalizables.service';

describe('PersonalizablesService', () => {
  let service: PersonalizablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
