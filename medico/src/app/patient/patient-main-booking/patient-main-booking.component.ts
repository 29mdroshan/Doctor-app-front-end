import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DoctorinfoService } from 'src/app/doctorinfo.service';
import { Doctor } from 'src/app/Entities/Doctor';
import { DoctorPat } from 'src/app/Entities/DoctorPatient';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { DoctorApiService } from 'src/app/services/doctor-api.service';

@Component({
  selector: 'app-patient-main-booking',
  templateUrl: './patient-main-booking.component.html',
  styleUrls: ['./patient-main-booking.component.css']
})
export class PatientMainBookingComponent {
  constructor(public _router:Router,public _docinfoClient:DoctorApiService){
  }
  ngOnInit():void{
    this.fetchData()
  }
  appointment(){
    this._router.navigate(['Book-appointment'])
  }
  searchValue:any
 
  doctors?:any
  fetchData(){
    this._docinfoClient.fetchAllDoctors().subscribe(
      data=>this.doctors=data
      )
  }

}
