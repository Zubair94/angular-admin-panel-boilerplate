import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  analytics:any = {
    user: 0,
    enrolled: 0,
    notenrolled: 0,
    inactive: 0
  };
  courseList: any; 
  courseSelected: any;
  dtOptions: any = {}
  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.initCourseList();
    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'copy',
        'print',
        'csv',
        'excel'
      ]
    };
  }

  initCourseList(){
    this.adminService.getCourseList().subscribe(response => {
      console.log(response);
      this.courseList = response.data; 
      //console.log(this.courseSelected);
    });
    this.adminService.getAnalyticsData().subscribe(response => {
      console.log(response);
      this.analytics = response.data;
    });
  }

  onCourseChange(){
    console.log(this.courseSelected);
  }

}
