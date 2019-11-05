import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: {href: string, title: string}[] = [
    {href: '/', title: 'Home'},
    {href: '/employees', title: 'Employees'},
    {href: '/departments', title: 'Departments'},
    {href: '/login', title: 'Login'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
