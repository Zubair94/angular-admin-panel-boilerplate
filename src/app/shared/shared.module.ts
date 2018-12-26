import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconModule } from './fa-icon/fa-icon.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailExistDirective } from './directives/email-exist.directive';
import { PasswordMatcherDirective } from './directives/passsword-matcher.directive';
import { EmailValidDirective } from './directives/email-valid.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [EmailExistDirective, PasswordMatcherDirective, EmailValidDirective, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FaIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FaIconModule,
    EmailExistDirective,
    SpinnerComponent,
    PasswordMatcherDirective,
    EmailValidDirective
  ]
})
export class SharedModule { }
