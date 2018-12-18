import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { SharedModule } from '../shared/shared.module';
import { AuthorizationService } from './services/authorization.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiRouteInterceptor } from './interceptors/api-route.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-center',
      maxOpened: 3,
      autoDismiss: true,
      preventDuplicates: true
    })
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
        AuthorizationService,
        AlertService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiRouteInterceptor,
          multi: true
        }
      ]
    };
  }
}
