import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sideBar', { static: true }) sideBar: ElementRef;
  constructor() { }

  ngOnInit() {
    this.sideNavToggle();
  }

  sideNavToggle(){
    // Toggle the side navigation
    $("#sidebarToggle").on('click',function(e) {
      e.preventDefault();
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
    });
  }
}
