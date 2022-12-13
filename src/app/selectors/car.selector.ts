import { createSelector } from "@ngrx/store";

export const getAllCars = createSelector(
    (state: any) => state["carsReducer"],
    (cars) => cars
);