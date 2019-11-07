import { TextFieldBase } from './text-field-base';

export class InputField extends TextFieldBase {

    type: 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'password' | 'email' = 'text';

    constructor(options: InputField) {
        super(options);
        this.controlType = 'input';
        this.type = options.type || 'text';
    }
}
