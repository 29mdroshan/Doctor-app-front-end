import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreviewDoctorComponent } from './admin-preview-doctor.component';

describe('AdminPreviewDoctorComponent', () => {
  let component: AdminPreviewDoctorComponent;
  let fixture: ComponentFixture<AdminPreviewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPreviewDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPreviewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
