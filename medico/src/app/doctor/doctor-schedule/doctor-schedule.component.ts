import { Component } from '@angular/core';
import { Doctor } from 'src/app/Entities/Doctor';

import { DoctorSchedule } from 'src/app/Entities/DoctorSchedule';
import { SlotsStatus } from 'src/app/Entities/SlotsStatus';
import { TimeSlots } from 'src/app/Entities/TimeSlots';
import { DoctorApiService } from 'src/app/services/doctor-api.service';
import { DoctorScheduleApiService } from 'src/app/services/doctor-schedule-api.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { StoreDoctorService } from 'src/app/services/store-doctor.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent  {


  
  constructor(public _doctorScheduleClient:DoctorScheduleApiService,public _storeDoctor:StoreDoctorService,
    public _doctorClient:DoctorApiService,public _loginAuthClient:LoginAuthService){}

 
  minDate = new Date();

  timeSlot?:Array<TimeSlots>=[];

  

  
  time_convert(num:any)
  {
   let a=num/3600
   var hours = Math.trunc(a);
   var minutes = Math.trunc((a - Math.floor(a))*60)
   
   return hours + ":" + minutes;
 }



   save(infoForm: any) {
     const sTime = infoForm.startTime.split(':');
     const eTime = infoForm.endTime.split(':');
    let  start :any=parseInt(sTime[0])*60*60+ sTime[1]*60;
    let  end :any=parseInt(eTime[0])*60*60+ eTime[1]*60;
    let consult: any=parseInt(infoForm.slots)*60
    for(let i=start;i<end;i=i+consult){
      let doctorTimeSlot:TimeSlots=new TimeSlots(this.time_convert(i),SlotsStatus.SLOTNOTBOOKED)
      this.timeSlot?.push(doctorTimeSlot)
  //  this.timeSlot?.push(this.time_convert(i))
    }
    let doc:DoctorSchedule =new DoctorSchedule(infoForm.scheduleDate,this.timeSlot,infoForm.doctorId);
    this.saveDoctorSchedule(doc)
   }


   saveDoctorSchedule(schedule:any){
    this._doctorScheduleClient.saveDoctorSchedule(schedule).subscribe(data=>
      {
        Swal.fire("Schedule Saved Successfully")
      })
  }

  blocks:any

  fetchDoctorSchedule(){
    this._doctorScheduleClient.fetchDoctorSchedule().subscribe(data=>
      {
        this.blocks=data
      })
  }




}
