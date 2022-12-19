import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { loggedUser } from "app/selectors/login.selector";

@Injectable({providedIn: 'root'} )
export class NotLoggedInUserGuard implements CanActivate {

    isUserLoggedIn: boolean | undefined;

    constructor(private store: Store,
        private router: Router){
        this.store.select(loggedUser).subscribe((loggedUser) => {
            if (loggedUser) {
                this.isUserLoggedIn = true;
            };

    }) 
}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) {
        return this.isUserLoggedIn ?? this.router.createUrlTree(['/']);
    }
}

@Injectable({providedIn: 'root'} )
export class LoggedInUserGuard implements CanActivate {

    isUserLoggedIn: boolean | undefined;

    constructor(private store: Store,
        private router: Router){
        this.store.select(loggedUser).subscribe((loggedUser) => {
            if (loggedUser) {
                this.isUserLoggedIn = true;
            };

    }) 
}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) {
        return !this.isUserLoggedIn ?? this.router.createUrlTree(['/']);
    }
}

@Injectable({providedIn: 'root'} )
export class AdminGuard implements CanActivate {

    isAdmin: boolean | undefined;

    constructor(private store: Store,
        private router: Router){
        this.store.select(loggedUser).subscribe((loggedUser) => {
            if (loggedUser.role === 'ADMIN') {
                this.isAdmin = true;
            };

    }) 
}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) {
        return this.isAdmin ?? this.router.createUrlTree(['/']);
    }
}