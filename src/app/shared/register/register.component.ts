import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: '../../app.module.ts'
})
export class RegisterComponent implements OnInit {
  
  constructor() { }

  registerGroup: any;

  ngOnInit(): void {
      this.registerGroup = new FormGroup({
      username: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      repeatPass: new FormControl('', [Validators.required, this.validatePasswordsMatch.bind(this)])
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
    console.log(registerForm);
  }

  registerUser() {

  }
}
