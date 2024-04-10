import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewAllAppointmentComponent } from './patient-view-all-appointment.component';

describe('PatientViewAllAppointmentComponent', () => {
  let component: PatientViewAllAppointmentComponent;
  let fixture: ComponentFixture<PatientViewAllAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewAllAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientViewAllAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
