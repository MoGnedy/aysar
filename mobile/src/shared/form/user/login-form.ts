import { FormClass } from '../form.class';
import { Validators } from '@angular/forms';

export class LoginFormClass extends FormClass {

    constructor() {
        super();
        this.form = this._fb.group({
            phone: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

}