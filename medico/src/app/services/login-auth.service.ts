import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  public setUsername(username:string){
    sessionStorage.setItem('userName',JSON.stringify(username));
  }
  public getUsername(): string{
    return JSON.parse(sessionStorage.getItem('userName') || '{}');
  }

  public setRoles(role:string){
    sessionStorage.setItem('roles',JSON.stringify(role));
  }
  public getRoles(): string{
    return JSON.parse(sessionStorage.getItem('roles') || '{}');
  }

  public setToken(jwtToken:string) {
    sessionStorage.setItem('jwtToken',jwtToken);
  }
  public getToken() :string |null{
    return sessionStorage.getItem('jwtToken');
  }
  public clear() {
    sessionStorage.clear();
  }
  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

}
