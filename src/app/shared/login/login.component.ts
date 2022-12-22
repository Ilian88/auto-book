import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../../reducers/auth.reducer';
import { HttpService } from '../../services/http.service';
import * as AuthActions from '../../actions/auth.actions'
import { NotificationService } from 'app/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpService, private router: Router ,
          private store: Store<UserState>,
          private notificationService: NotificationService) { }

  error: any;
  loginGroup: any;

  ngOnInit(): void {
    this.loginGroup = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required, Validators.minLength(4)]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(4)])
    })
  }
  
  loginUser() {
    this.http.login(this.loginGroup.get('username').value, this.loginGroup.get('password').value)
    .subscribe({
      next: (user) => { 
        this.store.dispatch(AuthActions.login({user: {...user, password: this.loginGroup.get('password').value}}))
        this.router.navigate(['/'])
      },
      error: (error) => {
        this.notificationService.createErrorMessage(error.error);
        this.loginGroup.reset();
      }
    })
  }

}