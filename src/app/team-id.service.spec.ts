import { TestBed } from '@angular/core/testing';

import { TeamIdService } from './team-id.service';

describe('TeamIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamIdService = TestBed.get(TeamIdService);
    expect(service).toBeTruthy();
  });
});
