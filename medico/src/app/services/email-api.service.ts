import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDetails } from '../Entities/EmailDetails';

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {

  constructor(public _http:HttpClient) { }

  url="http://localhost:8888/sendMail"

  sendEmail(email:EmailDetails):Observable<any>{
    return this._http.post(this.url,email)
  }
}
