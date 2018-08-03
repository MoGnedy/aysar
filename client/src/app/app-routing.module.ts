import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestGuardService as GuestGuard } from './shared/guards/guset.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuardService as AuthGuard } from './shared/guards/auth.guard';
import { ListItemsComponent } from './list-items/list-items.component';



const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
    { path: 'list', component: ListItemsComponent }
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
