import { TestBed } from '@angular/core/testing';

import { BookSlotService } from './book-slot.service';

describe('BookSlotApiService', () => {
  let service: BookSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
