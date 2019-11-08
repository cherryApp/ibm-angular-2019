import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../field-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent implements OnInit {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid ||
      this.form.controls[this.field.key].pristine;
  }

  constructor() { }

  ngOnInit() {
  }

}
