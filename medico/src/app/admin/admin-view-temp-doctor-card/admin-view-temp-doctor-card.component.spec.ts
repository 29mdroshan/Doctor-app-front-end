import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTempDoctorCardComponent } from './admin-view-temp-doctor-card.component';

describe('AdminViewTempDoctorCardComponent', () => {
  let component: AdminViewTempDoctorCardComponent;
  let fixture: ComponentFixture<AdminViewTempDoctorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewTempDoctorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewTempDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
