import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookAppointment } from 'src/app/Entities/BookAppointment';
import { BookAppointmentApiService } from 'src/app/services/book-appointment-api.service';

@Component({
  selector: 'app-admin-view-appointment',
  templateUrl: './admin-view-appointment.component.html',
  styleUrls: ['./admin-view-appointment.component.css']
})
export class AdminViewAppointmentComponent {
  constructor(public _httpClient:HttpClient,public _bookAppointmentClient:BookAppointmentApiService){}

  ngOnInit(): void {
    this.displayAllAppointment()
    

    
  }
  appointment?:BookAppointment[]
  searchValue?:string
  displayAllAppointment(){
    this._bookAppointmentClient.getAllAppointment().subscribe(
      data=> this.appointment=data
    )
  }
}
