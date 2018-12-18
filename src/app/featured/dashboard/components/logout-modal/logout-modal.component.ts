import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  onLogout(){
    //$('#logoutModal').modal('hide');
    this.authorizationService.Logout();
  }

}
