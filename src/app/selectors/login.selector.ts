
import { createSelector } from "@ngrx/store";
import { UserState } from "app/reducers/auth.reducer";


export const loggedUser = createSelector(
    (state: any) => state.login,
    (auth) => auth.user
);

