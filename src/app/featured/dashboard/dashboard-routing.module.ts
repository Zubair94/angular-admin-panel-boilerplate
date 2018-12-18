import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './pages/test/test.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: '',
        redirectTo: '/dashboard/test',
        pathMatch: 'full'
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
