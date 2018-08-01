import { Injectable } from '@angular/core';
import { Router, CanActivate, } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { user } from '../../../environments/environment';

@Injectable()
export class GuestGuardService implements CanActivate {
    constructor(
        private router: Router
    ) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!user.isAuthenticated) {
            return !user.isAuthenticated;
        } else {
            this.router.navigate(['welcome']);
        }
    }
}
