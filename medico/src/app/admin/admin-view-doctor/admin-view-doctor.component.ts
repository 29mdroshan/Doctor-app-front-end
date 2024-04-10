import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { DoctorApiService } from 'src/app/services/doctor-api.service';


@Component({
  selector: 'app-admin-view-doctor',
  templateUrl: './admin-view-doctor.component.html',
  styleUrls: ['./admin-view-doctor.component.css']
})
export class AdminViewDoctorComponent {
  constructor(public _router:Router,public _docinfoClient:DoctorApiService){
  }
  ngOnInit():void{
    this.fetchData()
  }

  searchValue?:any
  tempdoctors?:any
  fetchData(){
    this._docinfoClient.fetchAllDoctors().subscribe(
      data=>this.tempdoctors=data
      )
  }


}


