import { TestBed } from '@angular/core/testing';

import { UtenteServiceService } from './utente-service.service';

describe('UtenteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtenteServiceService = TestBed.get(UtenteServiceService);
    expect(service).toBeTruthy();
  });
});
