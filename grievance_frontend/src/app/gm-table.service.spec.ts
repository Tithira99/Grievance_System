import { TestBed } from '@angular/core/testing';

import { GmTableService } from './gm-table.service';

describe('GmTableService', () => {
  let service: GmTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
