import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
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
      this.registerGroup = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.minLength(4), Validators.required]),
      email: new UntypedFormControl('', [Validators.email, Validators.minLength(5)]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(4)]),
      repeatPass: new UntypedFormControl('', [Validators.required, this.validatePasswordsMatch.bind(this)]),
      gender: new UntypedFormControl('', [Validators.required])
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

  log(registerForm: UntypedFormGroup) {
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
