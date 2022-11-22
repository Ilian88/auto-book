import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'app/models/IUser';
import { UserState } from 'app/reducers/auth.reducer';
import { loggedUser } from 'app/selectors/login.selector';
import { map, Observable } from 'rxjs';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly homeButton = 'Home'
  readonly loginButton = 'Login';
  readonly registerButton = 'Register';
  readonly logoutButton = 'Logout';
  currentUser$: Observable<IUser> | undefined;
  
  constructor(private store: Store<UserState>) {
    
   }

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(
      select(loggedUser)
    );
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
  }

}
