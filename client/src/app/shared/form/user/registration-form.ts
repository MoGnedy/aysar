import { FormClass } from '../form.class';
import { Validators, FormGroup, FormControl } from '@angular/forms';

export class RegistrationForm extends FormClass {
    constructor() {
        super();
        this.form = this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, this.validateEmail.bind(this)]],
            // mobileNumber: ['', [Validators.required, Validators.pattern(/^1[0,1,2,5][0-9]{8}$/)]],
            phone: this._fb.group({
                country: ['', [Validators.required]],
                number: ['', [Validators.required, Validators.pattern(/^1[0,1,2,5][0-9]{8}$/)]]
            }),
            password: this._fb.group({
                password: ['',
                    [Validators.required, Validators.minLength(8),
                    ]],
                confirmPassword: ['', [Validators.required]]
            }, { validator: this.confirmPassword.bind(this) }),
            imageFile: [null],
        });
    }

    private confirmPassword(g: FormGroup) {
        return g.value.password === g.value.confirmPassword
            ? null : { 'passwordMismatch': true };
    }

    private validateEmail(c: FormControl) {
        const EMAIL = c.value;
        const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const CONDITION = REGEX.test(String(EMAIL).toLowerCase());
        return CONDITION ? null : { 'email': true };
    }
}