import { createAction, props } from '@ngrx/store'
import {CARS_RECEIVED, CARS_REQUEST} from './types'
import {ICar} from '../models/ICar';


export const carsRequest = createAction(
    CARS_REQUEST
)

export const carsReceived = createAction(
    CARS_RECEIVED,
    props<{cars: ICar[]}>()
);