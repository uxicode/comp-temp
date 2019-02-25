import { TestBed, inject } from '@angular/core/testing';

import { ChanceService } from './chance.service';

describe('ChanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChanceService]
    });
  });

  it('should be created', inject([ChanceService], (service: ChanceService) => {
    expect(service).toBeTruthy();
  }));
});
