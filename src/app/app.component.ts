import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Admin | Teachers Time';
  
  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.sideNavToggle();
    this.scorllEffect();
  }

  sideNavToggle(){
    // Toggle the side navigation
    $("#sidebarToggle").on('click',function(e) {
      e.preventDefault();
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
    });
  }

  scorllEffect(){
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button appear
    $(document).on('scroll',function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  }
}

