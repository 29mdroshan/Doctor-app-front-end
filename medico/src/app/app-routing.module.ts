import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddDoctorComponent } from './admin/admin-add-doctor/admin-add-doctor.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { AdminSideBarComponent } from './admin/admin-side-bar/admin-side-bar.component';
import { AdminViewAppointmentComponent } from './admin/admin-view-appointment/admin-view-appointment.component';
import { AdminViewDoctorComponent } from './admin/admin-view-doctor/admin-view-doctor.component';
import { AdminViewPatientComponent } from './admin/admin-view-patient/admin-view-patient.component';
import { AdminViewTempoarayDoctorComponent } from './admin/admin-view-tempoaray-doctor/admin-view-tempoaray-doctor.component';
import { DoctorLoginPageComponent } from './doctor/doctor-login-page/doctor-login-page.component';
import { DoctorPrescriptionComponent } from './doctor/doctor-prescription/doctor-prescription.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorRegistrationFormComponent } from './doctor/doctor-registration-form/doctor-registration-form.component';
import { DoctorScheduleComponent } from './doctor/doctor-schedule/doctor-schedule.component';
import { DoctorSideBarComponent } from './doctor/doctor-side-bar/doctor-side-bar.component';
import { DoctorViewAppointmentComponent } from './doctor/doctor-view-appointment/doctor-view-appointment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientBookAppointmentComponent } from './patient/patient-book-appointment/patient-book-appointment.component';
import { PatientDoctorCategoryComponent } from './patient/patient-doctor-category/patient-doctor-category.component';
import { PatientLoginPageComponent } from './patient/patient-login-page/patient-login-page.component';
import { PatientMainBookingComponent } from './patient/patient-main-booking/patient-main-booking.component';
import { PatientManageApptComponent } from './patient/patient-manage-appt/patient-manage-appt.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { PatientRegisterFormComponent } from './patient/patient-register-form/patient-register-form.component';
import { PatientSideBarComponent } from './patient/patient-side-bar/patient-side-bar.component';
import { PatientViewAllAppointmentComponent } from './patient/patient-view-all-appointment/patient-view-all-appointment.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'home',component:HomePageComponent
  },
  {
    path:'admin-login',component:AdminLoginPageComponent
  },
  {
    path:'admin-enter',component:AdminSideBarComponent, canActivate:[AuthGuard], data:{roles:["ADMIN"]},
    children: [
      {
        path: 'admin-dashboard', component: AdminDashboardComponent
      },
      {
        path:'view-temp-doctor',component:AdminViewTempoarayDoctorComponent
      },
      {
        path: 'admin-view-patient', component: AdminViewPatientComponent
      },
      {
        path: 'admin-view-appointment', component: AdminViewAppointmentComponent
      },
     
      {
        path: 'admin-view-doctor', component: AdminViewDoctorComponent
      },
    ],
  },
  {
    path: 'doctor-login', component: DoctorLoginPageComponent,

  },
  {
    path:'doctor-registration',component:DoctorRegistrationFormComponent
  },
  {
    path: 'doctor-enter', component: DoctorSideBarComponent, canActivate:[AuthGuard], data:{roles:["DOCTOR"]},
    children:[
      {
        path:'my-profile',component:DoctorProfileComponent
      },
      {
        path:'doctor-schedule',component:DoctorScheduleComponent
      },
      {
        path:'doctor-prescription',component:DoctorPrescriptionComponent
      },
      {
        path:'doctor-view-appointment',component:DoctorViewAppointmentComponent
      },
      
    ]
  },
  {
    path:'patient-login',component:PatientLoginPageComponent,
  },
  {
    path:'patient-register',component:PatientRegisterFormComponent
  },
  {
    path: 'patient-enter', component: PatientSideBarComponent, canActivate:[AuthGuard], data:{roles:["PATIENT"]},
    children: [

      {
        path: 'My-Profile', component: PatientProfileComponent
      },
      {
        path: 'patient-doc-cat',component:PatientDoctorCategoryComponent ,
      },
      {
        path:'main-booking/:id',component:PatientBookAppointmentComponent
      },
      {
        path:'main-booking',component:PatientMainBookingComponent
      },
      {
        path:'patient-view-app',component:PatientViewAllAppointmentComponent
      },
      {
        path:'patient-manage-appt',component:PatientManageApptComponent
      }


    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
