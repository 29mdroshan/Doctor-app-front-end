import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Doctor } from 'src/app/Entities/Doctor';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { DoctorApiService } from 'src/app/services/doctor-api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: any},public _doctoInfoClient:DoctorApiService,public _httpClient:HttpClient) { }

  updateDoctor(doctor:Doctor){
    doctor.doctorId=this.data.name[0].doctorId
    doctor.doctorUsername=this.data.name[0].doctorUsername
    doctor.doctorPassword=this.data.name[0].doctorPassword
    console.log(doctor.doctorImage.length)
    if(doctor.doctorImage.length==0){
      doctor.doctorImage=this.data.name[0].doctorImage
    }

   
      this._doctoInfoClient.updateDoctor(doctor).subscribe(
        data=>{Swal.fire("Profile Updated Successfully")}
      ) 
  }
 


}
