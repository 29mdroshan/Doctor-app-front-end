import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../Entities/LoginCredentials';
import { Patient } from '../Entities/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  private baseUrl="http://localhost:8888/patient"
  private authUrl="http://localhost:8888/authenticate"


  constructor(private _httpClient:HttpClient) { }
  
  registerPatient(user:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}`,user)
  }

  getAllPatient():Observable<Array<Patient>>{
    return this._httpClient.get<Array<Patient>>(this.baseUrl+"/allPatient")
  }

  sendDataToAuth(credentials:LoginCredentials):Observable<LoginCredentials>{
    return this._httpClient.post<LoginCredentials>(this.authUrl+"/user",credentials)
  }

  getPatientByUsername(username:string):Observable<Patient>{
    return this._httpClient.get<Patient>(this.baseUrl+"/getpatient/"+username)
  }

  updatePatient(user:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/updatepatient",user)
  }

  
}
