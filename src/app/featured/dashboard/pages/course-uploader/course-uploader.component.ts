import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BasicFormBuilder } from 'src/app/models/basicformbuilder';
import { validateMatchPassword } from 'src/app/shared/directives/passsword-matcher.directive';
import { emailValidValidator } from 'src/app/shared/directives/email-valid.directive';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-course-uploader',
  templateUrl: './course-uploader.component.html',
  styleUrls: ['./course-uploader.component.scss']
})
export class CourseUploaderComponent extends BasicFormBuilder implements OnInit {
  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  isCustomPassword: boolean = false;
  passwordType: string = "password";
  CourseUploader: FormGroup;
  constructor(private authorizationService: AuthorizationService, private formBuilder: FormBuilder) { 
    super();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    let matchPasswordValidator = {
      validator: validateMatchPassword("Password", "Password2")
    }
    this.CourseUploader = this.formBuilder.group({
      Name:[null, Validators.required],
      Email:[null, Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern) 
        ]),
        emailValidValidator(this.authorizationService)
      ],
      Password: [null],
      Password2:[null]
    }, matchPasswordValidator);
    
  }

  sendForm(){
    console.log(this.CourseUploader.value);
  }

  onCustomPasswordChecked(){
    this.isCustomPassword = !this.isCustomPassword;
    if(this.isCustomPassword){
      this.Password.setValidators(Validators.compose([Validators.required, Validators.minLength(6)]));
      this.Password2.setValidators(Validators.required)
    }else{
      this.Password.clearValidators();
      this.Password2.clearValidators();
    }
  }

  onShowPasswordChecked(){
    if(this.passwordType === "password"){
      this.passwordType = "text";
    }else{
      this.passwordType = "password";
    }
  }

  //getters
  get Name(){
    return this.CourseUploader.get('Name') as FormControl;
  }
  get Email(){
    return this.CourseUploader.get('Email') as FormControl;
  }
  get Password(){
    return this.CourseUploader.get('Password') as FormControl;
  }
  get Password2(){
    return this.CourseUploader.get('Password2') as FormControl;
  } 
}
