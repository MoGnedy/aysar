import { FormClass } from '../form.class';
import { Validators, AbstractControl } from '@angular/forms';

export class PostCarForm extends FormClass {
    constructor() {
        super();
        this.form = this._fb.group({
            type: ['0', [Validators.required, Validators.pattern(/^[0,1]$/)]],
            title: [null, Validators.required],
            desc: [null, [Validators.maxLength(500)]],
            price: [null, [Validators.required, Validators.pattern(/^\d{1,10}$/)]],
            images: this._fb.array([], this.minAndMaxLengthArray(1, 10)),
        });
    }


    minAndMaxLengthArray(min: number, max: number) {
        return (c: AbstractControl): { [key: string]: any } => {
            if (c.value.length >= min && c.value.length <= max) {
                return null;
            } else {
                if (c.value.length > max) {
                    return { 'maxLengthArray': { valid: false } };
                } else {
                    return { 'minLengthArray': { valid: false } };
                }

            }
        };
    }

}