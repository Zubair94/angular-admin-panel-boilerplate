import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  courseList: any; 
  courseSelected: any;
  dtOptions: any = {}
  constructor() { }
  ngOnInit() {
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
}
