import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Patient } from 'src/app/Entities/Patient';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { PatientApiService } from 'src/app/services/patient-api.service';


@Component({
  selector: 'app-admin-view-patient',
  templateUrl: './admin-view-patient.component.html',
  styleUrls: ['./admin-view-patient.component.css']
})
export class AdminViewPatientComponent {
  constructor(public _adminClient:AdminApiService,public _httpClient:HttpClient,public _patientclient:PatientApiService){}

  ngOnInit(): void {
    this.displayPatient()
    // this._httpClient.get('/jsonFiles/patientDet.json')

    
  }
  patients?:Patient[]
  searchValue?:string
  displayPatient(){
    this._patientclient.getAllPatient().subscribe(
      data=> this.patients=data
    )
  }


}
