import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestGuardService as GuestGuard } from './shared/guards/guset.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false }
            // <-- debugging purposes only,
        )],
    providers: [
        GuestGuard
    ]
    ,
    exports: [RouterModule]
})
export class AppRoutingModule { }
