import { TextFieldBase } from './text-field-base';

export class TextAreaField extends TextFieldBase {

    constructor(options: TextAreaField) {
        super(options);
        this.controlType = 'textarea';
    }
}
