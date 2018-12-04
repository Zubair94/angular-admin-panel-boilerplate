import { NgModule } from '@angular/core';


import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationComponent } from './authorization.component';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    SharedModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
