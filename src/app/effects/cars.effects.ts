import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { carsReceived, carsRequest } from "app/actions/cars.actions";
import { HttpService } from "app/services/http.service";
import { map, mergeMap, switchMap, tap } from "rxjs";

@Injectable()
export class CarsEffects {
    constructor(private readonly actions$: Actions,
                private readonly httpService: HttpService,
                private store: Store){}

fetchCars$ = createEffect(()=> {
    return this.actions$.pipe(
        ofType(carsRequest),
        switchMap(() => this.httpService.getAllCars().pipe(
            map((cars) => carsReceived({cars})
        ))
    ))
});

}


