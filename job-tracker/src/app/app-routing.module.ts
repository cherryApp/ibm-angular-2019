import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employee/create',
    component: EmployeeCreateComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
