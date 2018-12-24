import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ArticleUpdateComponent } from './pages/article-update/article-update.component';
import { CourseUploaderComponent } from './pages/course-uploader/course-uploader.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: '',
        redirectTo: '/dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'article-update',
        component: ArticleUpdateComponent
      },
      {
        path: 'course-uploader',
        component: CourseUploaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
