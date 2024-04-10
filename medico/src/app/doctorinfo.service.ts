import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorinfoService {

  constructor(public _http:HttpClient) { }
  url='http://localhost:3500/docinfo'
  fetchdata():Observable<any>{
    return this._http.get(this.url)
  }
}
