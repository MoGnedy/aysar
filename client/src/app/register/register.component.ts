import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationForm } from '../shared/form/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new RegistrationForm().getForm();
  }



}
