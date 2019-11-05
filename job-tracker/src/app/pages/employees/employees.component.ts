import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

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
    private employeeService: EmployeeService
  ) {
    const mockEmployee: Employee = new Employee();
    const colLIst = [];
    for (const k in mockEmployee) {
      if (k) {
        colLIst.push({key: k, title: this.toTitleCase(k)});
      }
    }
    this.cols = colLIst;
  }

  toTitleCase(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }

  ngOnInit() {
    /* this.employeeService.getAll().toPromise().then(
      employees => this.list = employees,
      err => console.error(err)
    ); */
  }

}
