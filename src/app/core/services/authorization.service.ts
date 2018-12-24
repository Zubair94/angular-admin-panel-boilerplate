import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private API_URL = environment.api_uri;
  constructor(private router: Router, private httpClient: HttpClient) { }

  private urlResolver(url){
    //console.log(this.API_URL + url);
    return this.API_URL + url;
  }
  
  checkExpired(){
    const decoded = this.tokenDecoder().exp;
    var date = Math.floor(Date.now()/1000);
    if(date > decoded){
      return true
    } else{
      return false;
    }
  }

  getAuthToken(){
    return localStorage.getItem('id_token');
  }

  tokenDecoder(){
    const token = this.getAuthToken();
    return decode(token);
  }

  canActivate(){
    if(this.getAuthToken()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }


  isUserLoggedIn(){
    if(this.getAuthToken()){
      if(this.checkExpired()){
        return false;
      }else{
        return true
      }
    }else{
      return false;
    }
  }

  storeAuthToken(token){
    localStorage.setItem('id_token', token);
  }

  isAdmin(){
    if(this.getAuthToken()){
      if(this.tokenDecoder().data.auth === "admin"){
          return true;
      }else{
          return false;
      }
    }else{
        return false;
    }
  }

  Logout(){
    localStorage.removeItem('id_token');
    this.router.navigate(['']);
  }


  authenticate(body){
    //console.log(body);
    return this.httpClient.post<ApiResponse>(this.urlResolver('admins/authenticate/admin'), body)
    .pipe(map(response => {
      //console.log(response);
      return response;
    }),
    catchError(error => {
      return Observable.throw(error);
    }));
  }

  checkAdminEmail(email){
    const body = {
      email: email
    }
    return this.httpClient.post<ApiResponse>(this.urlResolver('admins/check/email'), body)
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        return Observable.throw(error);
    }));
  }

}
