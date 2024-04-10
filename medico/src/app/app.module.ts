import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminAddDoctorComponent } from './admin/admin-add-doctor/admin-add-doctor.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSideBarComponent } from './admin/admin-side-bar/admin-side-bar.component';
import { AdminViewPatientComponent } from './admin/admin-view-patient/admin-view-patient.component';
import { AdminViewDoctorComponent } from './admin/admin-view-doctor/admin-view-doctor.component';
import { AdminViewAppointmentComponent } from './admin/admin-view-appointment/admin-view-appointment.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { DoctorLoginPageComponent } from './doctor/doctor-login-page/doctor-login-page.component';
import { DoctorSideBarComponent } from './doctor/doctor-side-bar/doctor-side-bar.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorScheduleComponent } from './doctor/doctor-schedule/doctor-schedule.component';
import { DoctorPrescriptionComponent } from './doctor/doctor-prescription/doctor-prescription.component';
import { DoctorViewAppointmentComponent } from './doctor/doctor-view-appointment/doctor-view-appointment.component';
import { PatientLoginPageComponent } from './patient/patient-login-page/patient-login-page.component';
import { PatientSideBarComponent } from './patient/patient-side-bar/patient-side-bar.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { PatientEditProfilePopupComponent } from './patient/patient-edit-profile-popup/patient-edit-profile-popup.component';
import { PatientBookAppointmentComponent } from './patient/patient-book-appointment/patient-book-appointment.component';
import { PatientMainBookingComponent } from './patient/patient-main-booking/patient-main-booking.component';
import { PatientDoctorCategoryComponent } from './patient/patient-doctor-category/patient-doctor-category.component';
import { DoctorFilterPipe } from './doctor-filter.pipe';
import { DoctorEditProfileComponent } from './doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorRegistrationFormComponent } from './doctor/doctor-registration-form/doctor-registration-form.component';
import { AdminViewTempoarayDoctorComponent } from './admin/admin-view-tempoaray-doctor/admin-view-tempoaray-doctor.component';

import { AdminViewTempDoctorCardComponent } from './admin/admin-view-temp-doctor-card/admin-view-temp-doctor-card.component';
import { AdminViewDoctorCardComponent } from './admin/admin-view-doctor-card/admin-view-doctor-card.component';
import { PatientRegisterFormComponent } from './patient/patient-register-form/patient-register-form.component';
import { PatientBookingSlotComponent } from './patient/patient-booking-slot/patient-booking-slot.component';
import { PatientViewAllAppointmentComponent } from './patient/patient-view-all-appointment/patient-view-all-appointment.component';
import { PatientManageApptComponent } from './patient/patient-manage-appt/patient-manage-appt.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdminPreviewDoctorComponent } from './admin/admin-preview-doctor/admin-preview-doctor.component';

import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { PatientApiService } from './services/patient-api.service';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginPageComponent,
    DialogPopupComponent,
    AdminAddDoctorComponent,
    AdminDashboardComponent,
    AdminSideBarComponent,
    AdminViewPatientComponent,
    AdminViewDoctorComponent,
    AdminViewAppointmentComponent,
    SearchFilterPipe,
    DoctorLoginPageComponent,
    DoctorSideBarComponent,
    DoctorProfileComponent,
    DoctorScheduleComponent,
    DoctorPrescriptionComponent,
    DoctorViewAppointmentComponent,
    PatientLoginPageComponent,
    PatientSideBarComponent,
    PatientProfileComponent,
    PatientEditProfilePopupComponent,
    PatientBookAppointmentComponent,
    PatientMainBookingComponent,
    PatientDoctorCategoryComponent,
    DoctorFilterPipe,
    DoctorEditProfileComponent,
    DoctorRegistrationFormComponent,
    AdminViewTempoarayDoctorComponent,

    AdminViewTempDoctorCardComponent,
     AdminViewDoctorCardComponent,
     PatientRegisterFormComponent,
     PatientBookingSlotComponent,
     PatientViewAllAppointmentComponent,
     PatientManageApptComponent,
     AdminPreviewDoctorComponent,
    
     
     
   
  ],
  entryComponents:[
    DialogPopupComponent,
    PatientEditProfilePopupComponent,
    DoctorEditProfileComponent,
    AdminPreviewDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    PatientApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
