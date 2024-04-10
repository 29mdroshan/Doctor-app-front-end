import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/services/admin-api.service';


@Component({
  selector: 'app-admin-view-tempoaray-doctor',
  templateUrl: './admin-view-tempoaray-doctor.component.html',
  styleUrls: ['./admin-view-tempoaray-doctor.component.css']
})
export class AdminViewTempoarayDoctorComponent {
  constructor(public _router:Router,public _docinfoClient:AdminApiService){
  }
  ngOnInit():void{
    this.fetchData()
  }

  searchValue?:any


  tempdoctors?:any
  fetchData(){
    this._docinfoClient.fetchTemporaryDoctors().subscribe(
      data=>this.tempdoctors=data
      )
  }

  

}
