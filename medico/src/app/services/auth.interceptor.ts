import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs"
import { catchError } from 'rxjs/operators'
import { Injectable } from "@angular/core";
import { LoginAuthService } from "./login-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userAuthService: LoginAuthService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get("No-Auth") === 'True') {
            return next.handle(req.clone())
        }
        const token = this.userAuthService.getToken();
        req = this.addToken(req, token)
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status === 401) {
                        this.router.navigate(['/authenticate']);
                    }
                    else if (err.status === 403) {
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError("Some thing is Worng");
                }
            )
        );

    }
    private addToken(request: HttpRequest<any>, token: any) {
        return request.clone(
            {
                setHeaders: {
                    Authorization: `$(token)`
                }
            }
        );
    }
}