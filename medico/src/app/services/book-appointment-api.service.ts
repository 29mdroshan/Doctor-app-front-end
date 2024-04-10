import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookAppointment } from '../Entities/BookAppointment';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentApiService {

  private bookUrl="http://localhost:8888/bookapp"
  constructor(private _httpClient:HttpClient) { }

  bookApp(user:any):Observable<any>{
    return this._httpClient.post(this.bookUrl+"/save", user)
  }

  getAllAppointment():Observable<Array<BookAppointment>>{
    return this._httpClient.get<Array<BookAppointment>>(this.bookUrl+"/allapp")
  }

  getAllAppointmentByUsername(username:any):Observable<Array<BookAppointment>>{
    return this._httpClient.get<Array<BookAppointment>>(this.bookUrl+"/appointmentById/"+username)
  }

  getAllAppointmentByDoctorId(doctorId:any):Observable<Array<BookAppointment>>{
    return this._httpClient.get<Array<BookAppointment>>(this.bookUrl+"/appointmentByDoctorId/"+doctorId)
  }

  deleteAppointment(id:any):Observable<any>{
      return this._httpClient.delete(this.bookUrl+"/"+id)
  }


}
