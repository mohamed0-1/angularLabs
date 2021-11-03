import { TestBed } from '@angular/core/testing';

import { AddprodServiceService } from './addprod-service.service';

describe('AddprodServiceService', () => {
  let service: AddprodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
