import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasicFormBuilder } from 'src/app/models/basicformbuilder';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { emailExistValidator } from 'src/app/shared/directives/email-exist.directive';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent extends BasicFormBuilder implements OnInit {
  
  LoginForm: FormGroup;
  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordType: string = "password";

  constructor(private alertService: AlertService, private router: Router, private authorizationService: AuthorizationService, private formBuilder: FormBuilder) { 
    super();
    this.createForm();
  }

  ngOnInit() {
    if(this.authorizationService.isUserLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  createForm(){
    this.LoginForm = this.formBuilder.group({
      Email:[null, 
        Validators.compose([
          Validators.pattern(this.emailPattern),
          Validators.required
        ]), emailExistValidator(this.authorizationService) 
      ],
      Password:[null, Validators.required],
      Checked: [false]
    });
  }

  sendForm(){
    //console.log(this.LoginForm.value);
    const body = {
      email: this.Email.value,
      password: this.Password.value
    }
    this.authorizationService.authenticate(body).subscribe(response => {
      if(response.success){
        this.authorizationService.storeAuthToken(response.token);
        this.alertService.success(response.msg, "Success");
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onChecked(){
    if(this.Checked.value === true){
      this.passwordType = "text";
    }else{
      this.passwordType = "password";
    }
  }

  get Email(){
    return this.LoginForm.get('Email') as FormControl;
  }

  get Password(){
    return this.LoginForm.get('Password') as FormControl;
  }

  get Checked(){
    return this.LoginForm.get('Checked') as FormControl;
  }
}
