import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { carsRequest } from 'app/actions/cars.actions';
import { ICar } from 'app/models/ICar';
import { CarState } from 'app/reducers/cars.reducer';
import { getAllCars } from 'app/selectors/car.selector';
import { HttpService } from 'app/services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: ICar[] = [];
  cars$: Observable<ICar[]> | undefined;

  constructor(private store: Store<CarState>,
    private http: HttpService) { 
      // this.store.dispatch(carsRequest());
    // this.cars$ = this.http.getAllCars();
    // this.store.select((getAllCars)).pipe(cars => this.cars$ = cars);
  }

  ngOnInit(): void {
    // this.store.dispatch(carsRequest());
    this.cars$ = this.http.getAllCars();
    // this.store.select(getAllCars).pipe(cars => this.cars$ = cars);
  }

}
