import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDoctorCardComponent } from './admin-view-doctor-card.component';

describe('AdminViewDoctorCardComponent', () => {
  let component: AdminViewDoctorCardComponent;
  let fixture: ComponentFixture<AdminViewDoctorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDoctorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
