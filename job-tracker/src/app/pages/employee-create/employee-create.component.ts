import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConfigService } from 'src/app/services/config.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  cols: any;

  constructor(
    private employeeService: EmployeeService,
    private config: ConfigService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cols = this.config.generateColsFromClass(Employee);
  }

  onCreate(employee: Employee): void {
    employee.id = 0;
    this.employeeService.create(employee).toPromise().then(
      response => this.router.navigateByUrl('/employees'),
      err => console.error(err)
    );
  }

}
