import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserNamePassword } from 'src/app/Entities/UserNamePassword';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { LoginServiceApiService } from 'src/app/services/login-service-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import { StoreDoctorService } from 'src/app/services/store-doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-login-page',
  templateUrl: './patient-login-page.component.html',
  styleUrls: ['./patient-login-page.component.css']
})
export class PatientLoginPageComponent {
  constructor(public _router: Router, public _loginClient: LoginServiceApiService, public _loginAuthClient: LoginAuthService,
    public _storeData:StoreDataService,public _storeDoctor:StoreDoctorService) { }

 
  login(loginForm: UserNamePassword) {

    this._loginClient.login(loginForm).subscribe(
      (data: any) => {
  
        this._loginAuthClient.setRoles(data.role);
        this._loginAuthClient.setUsername(data.username);

        this._loginAuthClient.setToken(data.value);
        
        Swal.fire("Welcome", "You  are LogedIn successfully", "success")

        if (data.role === "ADMIN") {
          this._router.navigate(['/admin-enter/admin-dashboard'])
        }
        else if (data.role === "DOCTOR") {
          this._storeDoctor.setDoctorId()
          this._router.navigate(['/doctor-enter/my-profile'])
        }
        else if (data.role === "PATIENT") {
         
          this._storeData.setUserId()
          this._router.navigate(['/patient-enter/My-Profile'])
        }
        else {
          this._router.navigate(['/patient-login'])
        }

      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'warning',
          title: 'Invalid Credentials',
        })
      }
    )

  }


}
