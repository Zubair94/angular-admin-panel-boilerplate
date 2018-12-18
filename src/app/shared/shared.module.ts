import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconModule } from './fa-icon/fa-icon.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailExistDirective } from './directives/email-exist.directive';

@NgModule({
  declarations: [EmailExistDirective],
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
    EmailExistDirective
  ]
})
export class SharedModule { }
