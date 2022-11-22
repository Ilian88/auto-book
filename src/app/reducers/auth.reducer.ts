import {
  createReducer,
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

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, {user}) => {
        return {
            ...state,
            user
        }
    }),
    on(AuthActions.logout, (_state, _action)=> {
        return initialState
    })
);

