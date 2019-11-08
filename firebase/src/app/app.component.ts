import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase';
  $list: Observable<any> = this.employeeService.$list;
  user: firebase.User = null;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(
      user => this.user = user
    );
  }

  onLogin() {
    this.authService.googleLogin();
  }
}
