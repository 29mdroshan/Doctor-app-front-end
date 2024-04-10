import { TestBed } from '@angular/core/testing';

import { BookAppointmentApiService } from './book-appointment-api.service';

describe('BookAppointmentApiService', () => {
  let service: BookAppointmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAppointmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
