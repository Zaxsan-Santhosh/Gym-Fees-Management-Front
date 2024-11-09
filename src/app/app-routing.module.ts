import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/Components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';

const routes: Routes = [

  {path:'admin-layout',component:AdminLayoutComponent},
  {path:'login-admin',component:AdminLoginComponent},
  {path:'dashboard',component:AdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
