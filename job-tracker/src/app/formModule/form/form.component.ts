import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControlService } from '../service/form-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fields;
  @Output() submitTrigger: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(
    private formControlService: FormControlService
  ) { }

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    this.submitTrigger.emit(this.form.value);
  }

}
