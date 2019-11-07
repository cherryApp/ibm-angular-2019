import { Component, OnInit } from '@angular/core';
import { FieldBase } from 'src/app/formModule/field-base';
import { InputField } from 'src/app/formModule/input-field';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSettings: FieldBase<any>[] = [
    new InputField({
      key: 'email',
      value: '',
      type: 'email',
      label: 'Email',
      limit: 20,
      validators: [Validators.required, Validators.email],
      order: 0,
      controlType: 'input'
    }),
    new InputField({
      key: 'password',
      value: '',
      type: 'password',
      label: 'Password',
      limit: 20,
      validators: [Validators.required, Validators.maxLength(20)],
      order: 1,
      controlType: 'input'
    })
  ];

  constructor() { }

  ngOnInit() {
  }

  submitted(data: any) {
    console.log(data);
  }

}
