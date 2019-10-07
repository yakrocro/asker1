import { TestBed } from '@angular/core/testing';

import { IdentFormService } from './ident-form.service';

describe('IdentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentFormService = TestBed.get(IdentFormService);
    expect(service).toBeTruthy();
  });
});
