import { Component } from '@angular/core';
import { DoctorPrescription } from 'src/app/Entities/DoctorPrescription';
import { DoctorPrescriptionApiService } from 'src/app/services/doctor-prescription-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-patient-manage-appt',
  templateUrl: './patient-manage-appt.component.html',
  styleUrls: ['./patient-manage-appt.component.css']
})
export class PatientManageApptComponent {

  constructor(public _precriptionClient:DoctorPrescriptionApiService,public _storeData:StoreDataService){}

  ngOnInit(): void {
    
  this.displayAllAppointment()
  }
  pres?:any
  searchValue?:string
  displayAllAppointment(){
    this._precriptionClient.fetchPrescriptionByID(this._storeData?.patient.userId).subscribe(
      data=> this.pres=data
    )
  }

}
