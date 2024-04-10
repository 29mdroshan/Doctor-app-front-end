import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookingSlotComponent } from './patient-booking-slot.component';

describe('PatientBookingSlotComponent', () => {
  let component: PatientBookingSlotComponent;
  let fixture: ComponentFixture<PatientBookingSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBookingSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBookingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
