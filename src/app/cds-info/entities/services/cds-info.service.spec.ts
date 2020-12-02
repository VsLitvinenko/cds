import { TestBed } from '@angular/core/testing';

import { CdsInfoService } from './cds-info.service';

describe('CdsInfoService', () => {
  let service: CdsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
