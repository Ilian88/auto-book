import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IUser } from "app/models/IUser";
import { CarState } from "app/reducers/cars.reducer";
import { loggedUser } from "app/selectors/login.selector";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    loggedUser?: IUser;

    constructor(private store: Store<CarState>){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loggedInUser();
        if(this.loggedUser && !req.url.endsWith('/login')) {
            let autData = btoa(this.loggedUser.username  + ':' +  this.loggedUser.password)
            req = req.clone({
                setHeaders: {
                    Authorization: 'Basic ' + autData
                }
            })
        }

        return next.handle(req);
    }

    private loggedInUser() {
       this.store.select(loggedUser).subscribe(user => this.loggedUser = user);
    }

}