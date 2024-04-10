import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {
  constructor(private _loginAuthClient:LoginAuthService, private _route:Router){}

  public logout(){
    Swal.fire({
      title: 'Are you sure to logout?',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this._loginAuthClient.clear();
        this._route.navigate(["/home"]);
        Swal.fire(
          'logout successful',
        )
      }
    })
  }

}
