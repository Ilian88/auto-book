import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import {HttpService} from '../../services/http.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: '../../app.module.ts'
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService: HttpService, private router: Router) { }

  registerGroup: any;
  error: any;

  ngOnInit(): void {
      this.registerGroup = new FormGroup({
      username: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      repeatPass: new FormControl('', [Validators.required, this.validatePasswordsMatch.bind(this)]),
      gender: new FormControl('', [Validators.required])
    });
  }

  // to fix it
  validatePasswordsMatch(control : AbstractControl): ValidatorFn  {
    return (control: AbstractControl) : ValidationErrors | null => {
      return control.value !== this.registerGroup.password.value
        ? {invalid: true}
        : null
    }
  }

  log(registerForm: FormGroup) {
    console.log(this.error);
  }

  registerUser() {
    this.authService.register(this.registerGroup.value)
        .subscribe({
          next: () => this.router.navigate(['/login']),
          error: (err) => {
            this.error = err;
            this.registerGroup.reset();
          }
        });
  }
}
