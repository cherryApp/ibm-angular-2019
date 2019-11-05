import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {

  entity = 'employees';

  constructor(
    http: HttpClient
  ) {
    super(http);
  }
}
