import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';

@NgModule({
  declarations: [
    FormComponent,
    DynamicFormControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent,
  ]
})
export class DynamicFormModule { }
