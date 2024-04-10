import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorPrescription } from '../Entities/DoctorPrescription';

@Injectable({
  providedIn: 'root'
})
export class DoctorPrescriptionApiService {

  constructor(public _http:HttpClient) { }

  url="http://localhost:8888/doctor/presp"

  savePrescription(presp:DoctorPrescription):Observable<DoctorPrescription>{
    return this._http.post<DoctorPrescription>(this.url,presp)
  }

  fetchPrescriptionByID(userId:any):Observable<Array<DoctorPrescription>>{
    return this._http.get<Array<DoctorPrescription>>(this.url+"/"+userId)
  }
}
