import { Injectable } from '@angular/core';
import { FieldBase } from '../field-base';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(formFields: FieldBase<any>[]): FormGroup {
    const group: any = {};
    formFields.forEach( field => {
      group[field.key] = new FormControl(
        field.value || '',
        field.validators
      );
    });
    return new FormGroup(group);
  }
}
