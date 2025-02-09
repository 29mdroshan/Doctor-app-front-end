import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSideBarComponent } from './doctor-side-bar.component';

describe('DoctorSideBarComponent', () => {
  let component: DoctorSideBarComponent;
  let fixture: ComponentFixture<DoctorSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
