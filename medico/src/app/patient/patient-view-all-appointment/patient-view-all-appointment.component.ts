import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookAppointment } from 'src/app/Entities/BookAppointment';
import { DoctorSchedule } from 'src/app/Entities/DoctorSchedule';
import { Patient } from 'src/app/Entities/Patient';
import { BookAppointmentApiService } from 'src/app/services/book-appointment-api.service';
import { DoctorScheduleApiService } from 'src/app/services/doctor-schedule-api.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { PatientApiService } from 'src/app/services/patient-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';


@Component({
  selector: 'app-patient-view-all-appointment',
  templateUrl: './patient-view-all-appointment.component.html',
  styleUrls: ['./patient-view-all-appointment.component.css']
})
export class PatientViewAllAppointmentComponent {
  constructor(public _httpClient:HttpClient,public _bookAppointmentClient:BookAppointmentApiService,
    public _patientClient:PatientApiService,public _storeData:StoreDataService,public _doctorScheduleClient:DoctorScheduleApiService){}

  ngOnInit(): void {
    this.displayAllAppointment()
    
  }




  appointment?:any
  searchValue?:string
  displayAllAppointment(){
    this._bookAppointmentClient.getAllAppointmentByUsername(this._storeData.userId).subscribe(
      data=> this.appointment=data
    )
  }

  timeSlots?:DoctorSchedule
  delete(appointment: any) {
    console.log(appointment)
    if (confirm("Sure To delete ?")) {
      this._doctorScheduleClient.fetchScheduleByIdAndDate(appointment.doctorId, appointment.appDate).subscribe(
        data => {
          this.timeSlots = data
          for (let i of this.timeSlots?.doctorSlots) {
            if (i.timeslot == appointment.appTime) {
              i.status = "SLOTNOTBOOKED"
            }
          }
          this._doctorScheduleClient.changeSlotStatus(this.timeSlots).subscribe()
        }
      )
      this._bookAppointmentClient.deleteAppointment(appointment.appId).subscribe(
          data => {
            alert("canceled successful")
            this.displayAllAppointment()
          },
          err => { alert("Not Cancel") }
        )
    }
  }






}
