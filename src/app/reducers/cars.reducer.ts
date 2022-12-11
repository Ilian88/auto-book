import { createReducer, on } from '@ngrx/store';
import {ICar} from '../models/ICar'
import { carsReceived } from 'app/actions/cars.actions';

export interface CarState {
    cars: ICar[];
}

export const initialState: CarState = {
    cars: []
};

export const carsReducer = createReducer(
    initialState,
    on(carsReceived, (state, {cars}) => {
        return {
            ...state,
            cars
        }
    }),
)