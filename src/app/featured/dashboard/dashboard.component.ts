import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit() {
  }
}
