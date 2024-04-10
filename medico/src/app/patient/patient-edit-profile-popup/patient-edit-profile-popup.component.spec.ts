import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditProfilePopupComponent } from './patient-edit-profile-popup.component';

describe('PatientEditProfilePopupComponent', () => {
  let component: PatientEditProfilePopupComponent;
  let fixture: ComponentFixture<PatientEditProfilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditProfilePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEditProfilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
