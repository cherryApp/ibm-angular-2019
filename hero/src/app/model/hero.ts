export class Hero {
    name: string = '';
    age: number = 0;
    superPower: string = '';
    address: string = 'New York';

    constructor(options: any = {}) {
        for ( const k in options ) {
            if (typeof this[k] !== 'undefined') {
                this[k] = options[k];
            }
        }
    }

    get summary(): string {
        return `Hello, my name is ${this.name} and I live in ${this.address}`;
    }
}
