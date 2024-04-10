import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/services/admin-api.service';

import { Admin } from '../../Entities/Admin';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {
  constructor(public adminClient:AdminApiService,public _router:Router){
 
    
  }

  admindata?:any

  display(credentail:Admin){

    this._router.navigate(['/admin-enter'])
    // if(this.admindata[0].username===credentail.username && this.admindata[0].password===credentail.password){
    //   this._router.navigate(['/admin-enter'])
    // }
    // else{
    //   return alert("Please try again")
    // }
    console.log()
  }

}
