import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MemberRegisterComponent as MemberRegisterComponent } from './Admin/Components/memebr-register/memebr-register.component';
=======
>>>>>>> master
import { FeeManagementComponent } from './Admin/Components/fee-management/fee-management.component';
import { MemberManagementComponent } from './Admin/Components/member-management/member-management.component';
import { ProgramsManagementComponent as ProgramsManagementComponent } from './Admin/Components/programs-managment/programs-managment.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Admin/Components/admin-login/admin-login.component';
import { RouterOutlet } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterMemberComponent } from './Admin/Components/member-register/member-register/member-register.component';
import { LandingPageComponent } from './Home/landing-page/landing-page/landing-page.component';
import { SearchFilterPipe } from './Pipes/search-filter.pipe';


>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MemberRegisterComponent,
=======
>>>>>>> master
    FeeManagementComponent,
    MemberManagementComponent,
    ProgramsManagementComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminLayoutComponent,
<<<<<<< HEAD
    BlankLayoutComponent
=======
    BlankLayoutComponent,
    RegisterMemberComponent,
    LandingPageComponent,
    SearchFilterPipe



>>>>>>> master

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterOutlet
=======
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    
    
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
