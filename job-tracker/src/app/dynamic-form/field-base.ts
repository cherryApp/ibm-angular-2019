import { Validator, ValidatorFn } from '@angular/forms';

export abstract class FieldBase<T> {
    value: T;
    key: string;
    label: string;
    validators: ValidatorFn[];
    order: number;
    controlType: 'input' | 'select' | 'textarea';

    constructor(options: FieldBase<T>) {
        for (const k in options) {
            if (options[k]) {
                this[k] = options[k];
            }
        }
    }
}
