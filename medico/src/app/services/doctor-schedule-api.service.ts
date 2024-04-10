import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorSchedule } from '../Entities/DoctorSchedule';


@Injectable({
  providedIn: 'root'
})
export class DoctorScheduleApiService {

  constructor(public _http:HttpClient) { }

  url="http://localhost:8888/doctor/schedule"

  saveDoctorSchedule(schedule:DoctorSchedule):Observable<DoctorSchedule>{
    return this._http.post<DoctorSchedule>(this.url+"/saveschedule",schedule)
  }

  fetchDoctorSchedule():Observable<Array<DoctorSchedule>>{
    return this._http.get<Array<DoctorSchedule>>(this.url+"/fetchSchedule/1")
  }

  fetchScheduleByIdAndDate(id:any,appDate:Date):Observable<any>{
    return this._http.get<any>(this.url+"/fetch/"+id+"/"+appDate)
  }

  changeSlotStatus(timeslot:any):Observable<DoctorSchedule>{
    return this._http.put<DoctorSchedule>(this.url+"/slot",timeslot)
  }
}
