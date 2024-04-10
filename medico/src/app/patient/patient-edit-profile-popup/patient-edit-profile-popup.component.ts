import { Component, Inject } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Patient } from 'src/app/Entities/Patient';
import { PatientApiService } from 'src/app/services/patient-api.service';

@Component({
  selector: 'app-patient-edit-profile-popup',
  templateUrl: './patient-edit-profile-popup.component.html',
  styleUrls: ['./patient-edit-profile-popup.component.css']
})
export class PatientEditProfilePopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: any},public _patientClient:PatientApiService) { }

  updatePatient(user:any){

    user.userId=this.data.name[0].userId
    user.userName1=this.data.name[0].userName1
    user.password=this.data.name[0].password
    this._patientClient.updatePatient(user).subscribe(data=>alert("Profile updated"))

  }
}
