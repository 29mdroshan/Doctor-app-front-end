import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';
import { LoginServiceApiService } from './login-service-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: LoginAuthService, private router: Router, private userService: LoginServiceApiService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userAuthService.getToken !== null) {
      const role = route.data["roles"] as string
      console.log(role)
      if (role) {
        const match = this.userService.roleMatch(role);
        if (match) {
          return true;
        }
        else {
          alert("access denaid")
          this.router.navigate(['/patient-login'])
          return false;
        }
      }
    }
    this.router.navigate(['/patient-login']);
    return true
  }
}

