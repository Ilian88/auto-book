import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'app/reducers/auth.reducer';
import { loggedUser } from 'app/selectors/login.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: Observable<UserState> | undefined;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.store.select(loggedUser);
  }

}
