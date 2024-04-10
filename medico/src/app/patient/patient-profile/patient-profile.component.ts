import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { PatientApiService } from 'src/app/services/patient-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import { PatientEditProfilePopupComponent } from '../patient-edit-profile-popup/patient-edit-profile-popup.component';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  constructor(public dialog:MatDialog,public _patientClient:PatientApiService,public _loginAuthClient:LoginAuthService,
    ){}

  ngOnInit(): void {
    this.fetchPatientFromServer()
  }
  openDialog(){
    let dialogRef = this.dialog.open(PatientEditProfilePopupComponent,{
      data: { name: [this.patient] },
        height: '70%',
        width: '60%',
        position: {
          top: '20vh',
          bottom: '',
          left: '30vw',
          right: ''
      },
      
    } );
    dialogRef.afterClosed().subscribe(
      result=>{
        this.fetchPatientFromServer()
       
        
      }
    )
  }


  patient:any
  fetchPatientFromServer() {
    this._patientClient.getPatientByUsername(this._loginAuthClient.getUsername()).subscribe(
      data =>{ this.patient = data
     
      },
      error => console.error(error)

    )

   
  }



}
