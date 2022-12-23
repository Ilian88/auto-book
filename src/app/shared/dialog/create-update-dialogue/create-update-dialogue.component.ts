import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Validators  } from '@angular/forms';
import { HttpService } from 'app/services/http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllCars } from 'app/selectors/car.selector';
import { carsRequest } from 'app/actions/cars.actions';
import { NotificationService } from 'app/notification/notification.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-create-dialogue',
  templateUrl: './create-update-dialogue.component.html',
  styleUrls: ['./create-update-dialogue.component.css']
})
export class CreateUpdateDialogueComponent implements OnInit {

  createCardFormGroup: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpService,
              private router: Router,
              private store: Store,
              private notificationService: NotificationService) { 
    
  }

  ngOnInit(): void {
    this.createCardFormGroup = new FormGroup({
      make: new FormControl(this.data ? this.data.car.make : '', [Validators.required, Validators.maxLength(20)]),
      model: new FormControl(this.data ? this.data.car.model : '', [Validators.required, Validators.maxLength(20)]),
      displacement: new FormControl(this.data ? this.data.car.displacement : '', [Validators.required, Validators.maxLength(15)]),
      fuelConsumtpion: new FormControl(this.data ? this.data.car.fuelConsumtpion : '', [Validators.required, Validators.maxLength(15)]),
      picURL: new FormControl(this.data ? this.data.car.picURL : '', [Validators.required, Validators.maxLength(100)]),
      description: new FormControl(this.data ? this.data.car.description : '', [Validators.required, Validators.maxLength(300)])
    })
  }

  onSubmit() {
      this.data 
            ? this.http.updateCar(this.data.car.id, this.createCardFormGroup.value).subscribe({
              next: ()=> {
                let id = this.data.car.id
                this.http.getCarById(id);
                this.router.navigate(['cars', id])
              },
              error: (error)=>  { 
                this.notificationService.createErrorMessage(error.error)
                this.createCardFormGroup.reset(); 
              }
            })
            : this.http.createCar(this.createCardFormGroup.value).subscribe({
              next: ()=> {
              },
              error: (error)=>  { 
                this.notificationService.createErrorMessage(error.error)
              }
            });

      this.router.navigate(['/']);
  }

}
