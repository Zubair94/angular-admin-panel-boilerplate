import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { SharedModule } from '../shared/shared.module';
import { AuthorizationService } from './services/authorization.service';


@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  exports:[
  ]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }

  static forRoot(): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        AuthorizationService
      ]
    };
  }
}
