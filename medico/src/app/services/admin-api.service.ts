import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Entities/Admin';
import { Doctor } from '../Entities/Doctor';



@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(public _http:HttpClient) { }

  base_url="http://localhost:8888/admin"


  saveTemporaryDoctor(doctor:Doctor):Observable<Doctor>{
    return this._http.post<Doctor>(this.base_url+"/saveDoctors",doctor)
  }

  fetchTemporaryDoctors():Observable<Array<Doctor>>{
    return this._http.get<Array<Doctor>>(this.base_url+"/getDoctors")
  }

  saveVerifiedDoctor(doctor:Doctor):Observable<Doctor>{
    return this._http.post<Doctor>(this.base_url+"/savePermanentDoctors",doctor)
  }

  deleteTempDoctor(doctorPhone:any):Observable<any>{
    return this._http.delete(this.base_url+"/deleteDoctor/"+doctorPhone)
  }


}
