import { TestBed } from '@angular/core/testing';

import { PersonajeServiceService } from './personaje-service.service';

describe('PersonajeServiceService', () => {
  let service: PersonajeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
