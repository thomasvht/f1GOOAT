import { TestBed } from '@angular/core/testing';

import { ConstructorStandingService } from './constructor-standing.service';

describe('ConstructorStandingService', () => {
  let service: ConstructorStandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructorStandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
