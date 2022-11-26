import { TestBed } from '@angular/core/testing';

import { NoJoinedGuard } from './no-joined.guard';

describe('NoJoinedGuard', () => {
  let guard: NoJoinedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoJoinedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
