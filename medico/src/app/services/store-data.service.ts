import { Injectable } from '@angular/core';
import { LoginAuthService } from './login-auth.service';
import { PatientApiService } from './patient-api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  

  constructor(public _patientClient:PatientApiService,public _loginAuthClient:LoginAuthService ) { }

  patient:any
  userId=0
  setUserId(){
    this._patientClient.getPatientByUsername(this._loginAuthClient.getUsername()).subscribe(
      data =>{ this.patient = data
      this.userId=this.patient.userId},
      error => console.error(error)
    )

  }

  getUserId(){
    return this.userId
  }


}
