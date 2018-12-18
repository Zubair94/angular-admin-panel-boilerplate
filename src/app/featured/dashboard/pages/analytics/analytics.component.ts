import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  //courseSelected: 
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
