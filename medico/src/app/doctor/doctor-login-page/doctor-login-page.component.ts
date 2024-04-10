import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login-page',
  templateUrl: './doctor-login-page.component.html',
  styleUrls: ['./doctor-login-page.component.css']
})
export class DoctorLoginPageComponent {
  constructor(public _router:Router){}

  register(){
    this._router.navigate(['/doctor-enter'])

  }

}
