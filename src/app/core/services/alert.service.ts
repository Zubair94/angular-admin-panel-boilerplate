import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private router: Router, private toastrService: ToastrService, private authorizationService: AuthorizationService) { 
  }

  success(message: string, title: string){
    this.toastrService.success(message, title, {
      closeButton: true
    });
  }

  error(message: string, title: string){
    this.toastrService.error(message, title, {
      closeButton: true
    });
  }

  warning(message: string, title: string){
    this.toastrService.warning(message, title, {
      closeButton: true
    });
  }

  info(message: string, title: string){
    this.toastrService.info(message, title, {
      closeButton: true
    });
  }

  handleError(err: HttpErrorResponse): Observable<any> {
    console.log(err);
    if (err.status === 401) {
        this.error(err.error.msg, err.statusText);
        this.authorizationService.Logout();
        this.router.navigate(['']);
        return of(err.error.msg);
    }
    else{
      this.error(err.error.msg, err.statusText);
      return of(err.error.msg);
    }
  }
}
