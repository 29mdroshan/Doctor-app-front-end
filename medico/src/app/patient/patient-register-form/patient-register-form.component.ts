import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/Entities/LoginCredentials';
import { Patient } from 'src/app/Entities/Patient';
import { Role } from 'src/app/Entities/Role';
import { PatientApiService } from 'src/app/services/patient-api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patient-register-form',
  templateUrl: './patient-register-form.component.html',
  styleUrls: ['./patient-register-form.component.css']
})
export class PatientRegisterFormComponent {
  constructor(private _userService:PatientApiService,public _router:Router){}
  user: Array<Patient> = []
  ngOnInit(): void {

  }
  userLogin(user:any){

    let credentails=new LoginCredentials(user.userName1,user.password,Role.PATIENT);

    this._userService.sendDataToAuth(credentails).subscribe(data=>{

    this._userService.registerPatient(user).subscribe(data=>
      {
        Swal.fire({
          icon: 'success',
          title: 'Registred Successfully',
        })
         this._router.navigate(['/patient-login'])

      },error=>Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
      })
    )

  },
  err=>{
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text:'Username already taken'
    })

  })
    
   
    


  }

}
