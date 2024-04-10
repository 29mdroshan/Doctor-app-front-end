import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserNamePassword } from '../Entities/UserNamePassword';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceApiService {

  constructor(public _httpClient: HttpClient, private _loginAuthService: LoginAuthService) { }

  private login_url = "http://localhost:8888/authenticate/login"

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );


  login(cred: UserNamePassword): Observable<UserNamePassword> {
    return this._httpClient.post<UserNamePassword>(this.login_url, cred, { headers: this.requestHeader })
  }

  public roleMatch(allowedRoles: any): any {
    let isMatch = false;
    const userRoles: any = this._loginAuthService.getRoles()
    if (userRoles != null) {
      if (userRoles == allowedRoles) {
        isMatch = true;
        return isMatch;
      }
      else {
        return isMatch;
      }
    }

  }


}
