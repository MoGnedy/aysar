import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestGuardService as GuestGuard } from './shared/guards/guset.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService as AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false }
            // <-- debugging purposes only,
        )],
    providers: [
        GuestGuard,
        AuthGuard
    ]
    ,
    exports: [RouterModule]
})
export class AppRoutingModule { }
