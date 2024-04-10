import { Component } from '@angular/core';

import { Doctor } from 'src/app/Entities/Doctor';
import { MatDialog } from '@angular/material/dialog';
import { DoctorEditProfileComponent } from '../doctor-edit-profile/doctor-edit-profile.component';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { DoctorApiService } from 'src/app/services/doctor-api.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {
  constructor(public _doctorClient: DoctorApiService,public dialog:MatDialog, public _router:Router,public _loginAuthClient:LoginAuthService) { }
  doc?: Doctor
  ngOnInit(): void {
    this.fetchItemsFromServer()
  }
  fetchItemsFromServer() {
    this._doctorClient.getDoctorByUsername(this._loginAuthClient.getUsername()).subscribe(
      data => this.doc = data,
      error => console.error(error)
    )
  }

  openDialog(){
    let dialogRef = this.dialog.open(DoctorEditProfileComponent,{
      data: { name: [this.doc] },
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
        this.fetchItemsFromServer()
        console.log(`Dialog result: ${result}`);
        
      }
    )
  }

}
