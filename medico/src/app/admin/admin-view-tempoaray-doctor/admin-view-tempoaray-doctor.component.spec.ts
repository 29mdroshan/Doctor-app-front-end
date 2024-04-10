import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTempoarayDoctorComponent } from './admin-view-tempoaray-doctor.component';

describe('AdminViewTempoarayDoctorComponent', () => {
  let component: AdminViewTempoarayDoctorComponent;
  let fixture: ComponentFixture<AdminViewTempoarayDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewTempoarayDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewTempoarayDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
