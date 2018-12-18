import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from '../services/authorization.service';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ApiRouteInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService, private authorizationService: AuthorizationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqHeaders = new HttpHeaders();
        reqHeaders = reqHeaders.append('Content-Type', 'application/json');

        if(this.authorizationService.isUserLoggedIn()){
            reqHeaders = reqHeaders.append('Authorization', this.authorizationService.getAuthToken());
        }

        //console.log(reqHeaders);
        request = request.clone({
            headers: reqHeaders
        });
        //console.log(request);
        return next.handle(request).pipe(catchError((error, caught) => {
            //console.log(error);
            this.alertService.handleError(error);
            return of(error);
        }) as any);
    }
}
