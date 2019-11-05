import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  // Switch an observable to another.
  $employee: Observable<Employee> = this.ar.params.pipe(
    switchMap( params => this.employeeService.get(params.id) )
  );

  constructor(
    private ar: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    /* this.ar.params.forEach(
      params => console.log(params.id)
    ); */


  }

}
