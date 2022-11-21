import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { IUser } from '../models/IUser';
import * as AuthActions from '../actions/auth.actions'

export interface UserState {
    user: IUser | undefined;
}

export const initialState: UserState = {
    user: undefined
}

export const loginReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, action) => {
        return {
            ...state,
            user: action
        }
    })
);