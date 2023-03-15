import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent, children: [
      {
        path: ':id', component: ArticleComponent
      }
    ]
  },
  { 
    path: 'pricing', component: PricingComponent, canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: '**', component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
