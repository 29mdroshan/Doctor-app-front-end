import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMainBookingComponent } from './patient-main-booking.component';

describe('PatientMainBookingComponent', () => {
  let component: PatientMainBookingComponent;
  let fixture: ComponentFixture<PatientMainBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMainBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMainBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
