import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './pages/test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent, 
    TestComponent,
    NavbarComponent,
    SideNavbarComponent,
    FooterComponent,
    LogoutModalComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
