import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/layout/dashboard/dashboard.component';
import { ListeEmployeAttenteComponent } from './Admin/layout/liste-employe-attente/liste-employe-attente.component';
import { LoginComponent } from './Admin/layout/login/login.component';
import { RegisterComponent } from './Admin/layout/register/register.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'listeAttente', component: ListeEmployeAttenteComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
