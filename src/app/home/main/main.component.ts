import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { carsRequest } from 'app/actions/cars.actions';
import { ICar } from 'app/models/ICar';
import { CarState } from 'app/reducers/cars.reducer';
import { getAllCars } from 'app/selectors/car.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: ICar[] = [];

  constructor(private store: Store<CarState>) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(carsRequest());
    
    this.store.select(getAllCars).subscribe(cars => this.cars = cars);
  }

}
