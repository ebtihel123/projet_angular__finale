import { TestBed } from '@angular/core/testing';

import { NourritureGuard } from './nourriture.guard';

describe('nourritureGuard', () => {
  let guard: NourritureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NourritureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
