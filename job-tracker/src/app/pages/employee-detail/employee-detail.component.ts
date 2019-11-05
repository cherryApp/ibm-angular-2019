import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  cols: any;

  // Switch an observable to another.
  $employee: Observable<Employee> = this.ar.params.pipe(
    switchMap( params => this.employeeService.get(params.id) )
  );

  constructor(
    private ar: ActivatedRoute,
    private employeeService: EmployeeService,
    private config: ConfigService,
    private router: Router
  ) {
    this.cols = this.config.generateColsFromClass(Employee);
  }

  ngOnInit() {
    /* this.ar.params.forEach(
      params => console.log(params.id)
    ); */


  }

  onSubmit(formRef: NgForm): void {
    this.employeeService.update(formRef.form.value).toPromise().then(
      response => this.router.navigateByUrl('/employees'),
      err => console.error(err)
    );
  }

}
