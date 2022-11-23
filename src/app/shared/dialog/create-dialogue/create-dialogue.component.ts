import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators  } from '@angular/forms';

@Component({
  selector: 'app-create-dialogue',
  templateUrl: './create-dialogue.component.html',
  styleUrls: ['./create-dialogue.component.css']
})
export class CreateDialogueComponent implements OnInit {

  createCardFormGroup: any;

  constructor() { }

  ngOnInit(): void {
    this.createCardFormGroup = new FormGroup({
      make: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      model: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      engine: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      fuelConsumtpion: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      picURL: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(300)])
    })
  }

  onSubmit() {
      console.log(this.createCardFormGroup);

  }

}
