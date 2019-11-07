import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { IndexComponent } from './pages/index/index.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { DynamicFormControlComponent } from './formModule/dynamic-form-control/dynamic-form-control.component';
import { FormComponent } from './formModule/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    EmployeesComponent,
    DepartmentsComponent,
    LoginComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    DynamicFormControlComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
