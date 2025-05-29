import { TestBed } from '@angular/core/testing';

import { AgmTableService } from './agm-table.service';

describe('AgmTableService', () => {
  let service: AgmTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgmTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
