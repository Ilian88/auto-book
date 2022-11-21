import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/reducers/login.reducer';
import { HttpService } from 'src/app/services/http.service';
import * as AuthActions from '../../actions/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpService, private router: Router ,
          private store: Store<UserState>) { }

  error: any;
  loginGroup: any;

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }
  
  loginUser() {
    this.http.login(this.loginGroup.get('username').value, this.loginGroup.get('password').value)
    .subscribe({
      next: (user) => { 
        this.store.dispatch(AuthActions.login(user))
        this.router.navigate(['/'])
      },
      error: (err) => {
        alert(err);
        this.error = err;
        this.loginGroup.reset();
      }
    });
  }

}