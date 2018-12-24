import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BasicFormBuilder } from 'src/app/models/basicformbuilder';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss']
})
export class ArticleUpdateComponent extends BasicFormBuilder implements OnInit {
  FeaturedForm: FormGroup;
  blogs = ["blog1", "blog2", "blog3", "blog4", "blog5"]
  constructor(private formBuilder: FormBuilder, private alertService: AlertService) { 
    super();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.FeaturedForm = this.formBuilder.group({
      Article:[null, Validators.required],
      Featured: [null, Validators.required]
    });
  }

  sendForm(){
    console.log(this.FeaturedForm.value);
  }

  //getters
  get Article(){
    return this.FeaturedForm.get('Article') as FormControl;
  }

  get Featured(){
    return this.FeaturedForm.get('Featured') as FormControl;
  }
}
