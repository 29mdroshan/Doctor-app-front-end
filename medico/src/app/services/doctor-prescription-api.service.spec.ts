import { TestBed } from '@angular/core/testing';

import { DoctorPrescriptionApiService } from './doctor-prescription-api.service';

describe('DoctorPrescriptionApiService', () => {
  let service: DoctorPrescriptionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorPrescriptionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
