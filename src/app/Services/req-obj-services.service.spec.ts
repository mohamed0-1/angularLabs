import { TestBed } from '@angular/core/testing';

import { ReqObjServicesService } from './req-obj-services.service';

describe('ReqObjServicesService', () => {
  let service: ReqObjServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqObjServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
