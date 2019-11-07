import { FieldBase } from './field-base';

export class TextFieldBase extends FieldBase<string> {
    limit = 0;

    constructor(options: TextFieldBase) {
        super(options);
        if (options.limit) {
            this.limit = options.limit;
        }
    }
}
