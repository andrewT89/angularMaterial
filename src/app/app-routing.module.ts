import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'users', loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
