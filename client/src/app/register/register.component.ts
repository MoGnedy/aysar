import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationForm } from '../shared/form/user';
import { users, user } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registrationForm: FormGroup;
  constructor(private router: Router) {
    this.registrationForm = new RegistrationForm().getForm();
  }

  onRegister() {
    if (this.registrationForm.valid) {
      users.push(this.registrationForm.value);
      user.isAuthenticated = true;
      this.router.navigate(['/welcome']);
    }
  }



}
