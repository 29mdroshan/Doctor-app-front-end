import { TestBed } from '@angular/core/testing';

import { DoctorScheduleApiService } from './doctor-schedule-api.service';

describe('DoctorScheduleApiService', () => {
  let service: DoctorScheduleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorScheduleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
