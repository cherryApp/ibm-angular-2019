import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { IndexComponent } from './pages/index/index.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    EmployeesComponent,
    DepartmentsComponent,
    LoginComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
