import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../Entities/Doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {

  constructor(public _http:HttpClient) { }

  doctor_url='http://localhost:8888/doctor/register'

  fetchAllDoctors():Observable<Array<Doctor>>{
    return this._http.get<Array<Doctor>>(this.doctor_url)
  }

  fetchDoctorById(id:any):Observable<Doctor>{
    return this._http.get<Doctor>(this.doctor_url+'/'+id)
  }
 

  saveDoctor(doctor:Doctor):Observable<Doctor>{
    return this._http.post<Doctor>(this.doctor_url,doctor)
  }


  updateDoctor(doctor:Doctor):Observable<Doctor>{
    return this._http.put<Doctor>(this.doctor_url,doctor)
  }

  getDoctorByUsername(username:any):Observable<Doctor>{
    return this._http.get<Doctor>(this.doctor_url+"/username/"+username)
  }

  


  
}
