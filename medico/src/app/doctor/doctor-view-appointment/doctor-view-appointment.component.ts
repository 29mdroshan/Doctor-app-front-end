import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookAppointment } from 'src/app/Entities/BookAppointment';
import { BookAppointmentApiService } from 'src/app/services/book-appointment-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import { StoreDoctorService } from 'src/app/services/store-doctor.service';

@Component({
  selector: 'app-doctor-view-appointment',
  templateUrl: './doctor-view-appointment.component.html',
  styleUrls: ['./doctor-view-appointment.component.css']
})
export class DoctorViewAppointmentComponent {
  constructor(public _httpClient:HttpClient,public _bookAppointmentClient:BookAppointmentApiService,
    public _storeDoctor:StoreDoctorService){}

  ngOnInit(): void {
    this.displayAllAppointment()
    

    
  }
  appointment?:BookAppointment[]
  searchValue?:string
  displayAllAppointment(){
    this._bookAppointmentClient.getAllAppointmentByDoctorId(this._storeDoctor.doctorId).subscribe(
      data=> this.appointment=data
    )
  }
}
