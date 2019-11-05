import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  list: Employee[] = [];
  $list: Observable<Employee[]> = this.employeeService.getAll().pipe(
    map( employees => {
      return employees.filter( emp => emp.id > 100 );
    } )
  );

  cols: {key: string, title: string}[] = [];

  constructor(
    private employeeService: EmployeeService,
    private config: ConfigService
  ) {
    this.cols = this.config.generateColsFromClass(Employee);
  }

  ngOnInit() {
    /* this.employeeService.getAll().toPromise().then(
      employees => this.list = employees,
      err => console.error(err)
    ); */
  }

}
