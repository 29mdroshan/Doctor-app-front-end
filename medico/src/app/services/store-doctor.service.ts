import { Injectable } from '@angular/core';
import { DoctorApiService } from './doctor-api.service';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDoctorService {

  constructor(public _doctorClient:DoctorApiService,public _loginAuthClient:LoginAuthService ) { }

  doctor:any
  doctorId=0
  setDoctorId(){
    this._doctorClient.getDoctorByUsername(this._loginAuthClient.getUsername()).subscribe(
      data =>{ this.doctor = data
      this.doctorId=this.doctor.doctorId
      console.log(this.doctorId)},
      error => console.error(error)
    )
  }

  getDoctorId(){
    return this.doctorId
  }
}
