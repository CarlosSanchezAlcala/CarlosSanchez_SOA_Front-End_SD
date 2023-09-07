import { TestBed } from '@angular/core/testing';

import { LegalGuardianService } from './legal-guardian.service';

describe('LegalGuardianService', () => {
  let service: LegalGuardianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalGuardianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
