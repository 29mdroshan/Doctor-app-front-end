import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Doctor } from 'src/app/Entities/Doctor';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { AdminPreviewDoctorComponent } from '../admin-preview-doctor/admin-preview-doctor.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-temp-doctor-card',
  templateUrl: './admin-view-temp-doctor-card.component.html',
  styleUrls: ['./admin-view-temp-doctor-card.component.css']
})
export class AdminViewTempDoctorCardComponent {
  @Input('doc')
  doc?: any
  constructor(public _adminClient: AdminApiService, public _httpClient: HttpClient, public _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  verifyDoctor(doctor: Doctor) {
    if(confirm("Do you want to verify this Doctor??")){
      this._adminClient.saveVerifiedDoctor(doctor).subscribe(
        data => {
          Swal.fire({
            "icon": "success",
            "title": "Doctor Verified"
          })
          this._router.navigate(["/admin-enter/admin-view-doctor"])
  
        }, error => Swal.fire({
          "icon": "error",
          "title": "Doctor Not Verified"
        })
      )
    }

    
  }

  deleteDoctor(doctorPhone: any) {
    if (confirm("Do you want to delete doctor??")) {
      this._adminClient.deleteTempDoctor(doctorPhone).subscribe(
        data => {
          Swal.fire("Doctor Deleted")
          this._router.navigate(['/admin-enter/admin-view-doctor'])
        }
      )
    }

  }


  openDialog() {
    let dialogRef = this.dialog.open(AdminPreviewDoctorComponent, {
      data: { name: [this.doc] },
      height: '50%',
      width: '45%',
      position: {
        top: '20vh',
        bottom: '',
        left: '35vw',
        right: ''
      },

    });
    dialogRef.afterClosed().subscribe(
      result => {

        console.log(`Dialog result: ${result}`);

      }
    )
  }



}
