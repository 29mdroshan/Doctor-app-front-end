import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookAppointment } from 'src/app/Entities/BookAppointment';
import { Doctor } from 'src/app/Entities/Doctor';
import { DoctorSchedule } from 'src/app/Entities/DoctorSchedule';
import { EmailDetails } from 'src/app/Entities/EmailDetails';
import { Patient } from 'src/app/Entities/Patient';

import { BookAppointmentApiService } from 'src/app/services/book-appointment-api.service';
import { BookSlotService } from 'src/app/services/book-slot.service';
import { DoctorApiService } from 'src/app/services/doctor-api.service';

import { DoctorScheduleApiService } from 'src/app/services/doctor-schedule-api.service';
import { EmailApiService } from 'src/app/services/email-api.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { PatientApiService } from 'src/app/services/patient-api.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patient-book-appointment',
  templateUrl: './patient-book-appointment.component.html',
  styleUrls: ['./patient-book-appointment.component.css']
})
export class PatientBookAppointmentComponent {

  @Input('timeSlots')
  timeSlots?: DoctorSchedule

  constructor(public _route: ActivatedRoute, public _docinfoClient: DoctorApiService, public route: Router, private _bookAppointmentClient: BookAppointmentApiService, private _doctorScheduleClient: DoctorScheduleApiService,
    public _bookTimeSlotClient:BookSlotService,public _loginAuthClient:LoginAuthService,public _patientClient:PatientApiService,public _storeData:StoreDataService,public _emailClient:EmailApiService,public _router:Router) { }
  doctor?: Doctor
  ngOnInit(): void {
    
    this._route.params.subscribe(
      params => {
        const id = params['id']
        this._docinfoClient.fetchDoctorById(id).subscribe(
          data => this.doctor = data
        )
      }
    )
    this.patientDetails()
  }



  fetchSlotsById(appDate: Date) {
    let doctorId = this.doctor?.doctorId
    this._doctorScheduleClient.fetchScheduleByIdAndDate(doctorId, appDate).subscribe(
      data => this.timeSlots = data
    )

  }

  patient?:Patient
  patientDetails(){
    this._patientClient.getPatientByUsername(this._loginAuthClient.getUsername()).subscribe(data=>this.patient=data)

  }



  user: Array<BookAppointment> = []
  bookApp(user: any) {
    user.doctorName = this.doctor?.doctorName
    user.doctorId = this.doctor?.doctorId

    user.userId=this.patient?.userId
    user.userName=this.patient?.userName
    user.userEmail=this.patient?.userEmail
    console.log(user)

    let email1=new EmailDetails(this.patient?.userEmail,"Your Appointment has been Booked successfully with Dr."+this.doctor?.doctorName+" On "+user?.appDate+" at "+user?.appTime,"Booking confirmed");
    let email2=new EmailDetails(this.doctor?.doctorEmail,"Your Appointment has been Booked successfully with "+this.patient?.userName+" On "+user?.appDate+" at "+user?.appTime,"Booking confirmed");
   

    if (confirm("Do you want to book appointment for " + this._bookTimeSlotClient.bookSlot.timeslot)) {
      
      for (let i of this.timeSlots?.doctorSlots) {
        if (i.timeslot == this._bookTimeSlotClient.bookSlot.timeslot) {
          i.status = "SLOTBOOKED"
        }
      }
      this._bookAppointmentClient.bookApp(user).subscribe(data => {
        this._doctorScheduleClient.changeSlotStatus(this.timeSlots).subscribe(
          data => {
            console.log(this.timeSlots)
          }
        )
        this._bookTimeSlotClient.setTimeSlot()

        this._emailClient.sendEmail(email1).subscribe()
        this._emailClient.sendEmail(email2).subscribe()
        Swal.fire({
          "icon":"success",
          "title":"Appointment Booked Successfully",
          "text":"Mail has been sent"
        })

        this._router.navigate(["/patient-enter/main-booking"])



      }, error => { alert("Appointment Booking failed") }
      )
    }

  }


  
}
