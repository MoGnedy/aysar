import { FormBuilder, FormGroup } from '@angular/forms';
export abstract class FormClass {
    protected _fb: FormBuilder;
    protected form: FormGroup;
    constructor() {
        this._fb = new FormBuilder();
    }

    public getForm() {
        return this.form;
    }


    getFormBuilderInstance() {
        return this._fb;
    }
}