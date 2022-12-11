
import { createSelector } from "@ngrx/store";

export const loggedUser = createSelector(
    (state: any) => state.login,
    (auth) => auth.user
);

