import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormClass } from '../shared/form/user';
import { users, user as authenticatedUser } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router) {
    this.loginForm = new LoginFormClass().getForm();
  }

  onLoginFormSubmit() {
    if (this.loginForm.valid) {
      this.checkPhoneAndPassword();
    }
  }

  checkUserPhone(user): boolean {
    const phone = this.loginForm.get('phone').value;
    return user.phone === phone;
  }

  checkUserPassword(user): boolean {
    const password = this.loginForm.get('password').value;
    return user.password === password;
  }

  checkPhoneAndPassword() {
    users.forEach(element => {
      if (this.checkUserPhone(element) && this.checkUserPassword(element)) {
        authenticatedUser.data = element;
        authenticatedUser.isAuthenticated = true;
        this.router.navigate(['/welcome']);
      }
    });
  }
}
