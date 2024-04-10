import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Doctor } from 'src/app/Entities/Doctor';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrls: ['./admin-add-doctor.component.css']
})
export class AdminAddDoctorComponent implements OnInit{

  constructor(public _adminClient:AdminApiService,public _httpClient:HttpClient){}

  doctor:Array<Doctor>=[]
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  sample(){
    alert("***********")
  }

  saveDoctor(doctor:Doctor){
    doctor.doctorImage="https://cdn-icons-png.flaticon.com/512/3774/3774299.png";
    console.log(doctor)
    this._adminClient.saveTemporaryDoctor(doctor).subscribe(
      data=>{alert("Doctor saved")
    },error=>alert("doctor not saved")
    )
  }


}
