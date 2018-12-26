import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/models/apiresponse';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API_URL = environment.api_uri;
  constructor(private httpClient: HttpClient) { }

  private urlResolver(url){
    //console.log(this.API_URL + url);
    return this.API_URL + url;
  }

  getCourseList(){
    return this.httpClient.get<ApiResponse>(this.urlResolver('admins/course?select=courseTitle _id'))
    .pipe(map(response => {
      console.log(response);
      return response;
    }),
    catchError(error => {
      return Observable.throw(error);
    }));
  }

  getAnalyticsData(){
    return this.httpClient.get<ApiResponse>(this.urlResolver('admins/analytics'))
    .pipe(map(response => {
      //console.log(response);
      return response;
    }),
    catchError(error => {
      return Observable.throw(error);
    }));
  }

  getUsersList(){
    return this.httpClient.get<ApiResponse>(this.urlResolver('admins/user'))
    .pipe(map(response => {
      //console.log(response);
      return response;
    }),
    catchError(error => {
      return Observable.throw(error);
    }));
  }

  promoteMultiUser(body){
    return this.httpClient.post<ApiResponse>(this.urlResolver('admins/promote'), body)
    .pipe(map(response => {
      //console.log(response);
      return response;
    }),
    catchError(error => {
      return Observable.throw(error);
    }));
  }
}
