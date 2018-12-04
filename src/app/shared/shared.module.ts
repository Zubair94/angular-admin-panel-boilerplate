import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconModule } from './fa-icon/fa-icon.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaIconModule
  ],
  exports: [
    CommonModule,
    FaIconModule
  ]
})
export class SharedModule { }
