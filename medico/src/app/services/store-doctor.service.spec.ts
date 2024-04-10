import { TestBed } from '@angular/core/testing';

import { StoreDoctorService } from './store-doctor.service';

describe('StoreDoctorService', () => {
  let service: StoreDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
