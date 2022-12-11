import { createAction, props } from "@ngrx/store";
import { IUser } from "../models/IUser";
import {LOGIN_ACTION, LOGOUT_ACTION} from './types'


export const login = createAction(
    LOGIN_ACTION,
    props<{user: IUser}>()
);

export const logout = createAction(
    LOGOUT_ACTION,
);
