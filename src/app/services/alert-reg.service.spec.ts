import { TestBed } from '@angular/core/testing';

import { AlertRegService } from './alert-reg.service';

describe('AlertRegService', () => {
  let service: AlertRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
