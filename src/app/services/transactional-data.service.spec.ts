import { TestBed } from '@angular/core/testing';

import { TransactionalDataService } from './transactional-data.service';

describe('TransactionalDataService', () => {
  let service: TransactionalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
