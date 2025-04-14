import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/layout/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },      // http://localhost:4200/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
