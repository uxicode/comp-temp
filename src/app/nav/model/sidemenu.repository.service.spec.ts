import { TestBed, inject } from '@angular/core/testing';

import { Sidemenu.RepositoryService } from './sidemenu.repository.service';

describe('Sidemenu.RepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sidemenu.RepositoryService]
    });
  });

  it('should be created', inject([Sidemenu.RepositoryService], (service: Sidemenu.RepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
