import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { FormGroup } from "@angular/forms";
import { LoginFormClass } from "../../shared/form/user";
import { GlobalProvider } from "../../services/global-provider.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  isLoginFormSubmitted: boolean;
  constructor(public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    private globalProvider: GlobalProvider
  ) {
    this.menu.swipeEnable(false);
    this.loginForm = new LoginFormClass().getForm();
    this.isLoginFormSubmitted = false;
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    // this.nav.setRoot(HomePage);
    this.isLoginFormSubmitted = true;
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
    this.globalProvider.globalVar.users.forEach(element => {
      if (this.checkUserPhone(element) && this.checkUserPassword(element)) {
        this.globalProvider.globalVar.user.data = element;
        this.globalProvider.globalVar.user.isAuthenticated = true;
        this.nav.setRoot(HomePage);
      }
    });
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
