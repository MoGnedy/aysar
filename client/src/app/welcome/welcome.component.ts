import { Component, OnInit } from '@angular/core';
import { user as authenticatedUser } from '../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor() { }

  get authenticatedUser() {
    return authenticatedUser;
  }

}
