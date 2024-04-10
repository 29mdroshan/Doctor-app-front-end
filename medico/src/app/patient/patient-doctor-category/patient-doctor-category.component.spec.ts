import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorCategoryComponent } from './patient-doctor-category.component';

describe('PatientDoctorCategoryComponent', () => {
  let component: PatientDoctorCategoryComponent;
  let fixture: ComponentFixture<PatientDoctorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDoctorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
