import { TestBed, inject } from '@angular/core/testing';

import { NavStateService } from './nav-state.service';

describe('NavStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavStateService]
    });
  });

  it('should be created', inject([NavStateService], (service: NavStateService) => {
    expect(service).toBeTruthy();
  }));
});
