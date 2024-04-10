import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Doctor } from 'src/app/Entities/Doctor';
import { AdminApiService } from 'src/app/services/admin-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-registration-form',
  templateUrl: './doctor-registration-form.component.html',
  styleUrls: ['./doctor-registration-form.component.css']
})
export class DoctorRegistrationFormComponent {
  constructor(public _adminClient:AdminApiService,public _httpClient:HttpClient,public _router:Router){}

  doctor:Array<Doctor>=[]
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  

  saveDoctor(doctor:Doctor){
    if(doctor.doctorImage==''){
    doctor.doctorImage="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
  }
    this._adminClient.saveTemporaryDoctor(doctor).subscribe(
      data=>{Swal.fire({
        icon:"success",
        "title": "Details sent to admin",
        "text":"Wait for Admin to approve"
      })
      this._router.navigate(['/patient-login'])

    },error=>Swal.fire({
      icon:"error",
      "title": "Registration Failed",
    })
    )
  }


}
