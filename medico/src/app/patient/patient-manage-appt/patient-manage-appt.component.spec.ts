import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManageApptComponent } from './patient-manage-appt.component';

describe('PatientManageApptComponent', () => {
  let component: PatientManageApptComponent;
  let fixture: ComponentFixture<PatientManageApptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientManageApptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientManageApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
