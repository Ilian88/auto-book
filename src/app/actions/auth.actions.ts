import { createAction, props } from "@ngrx/store";
import { IUser } from "../models/IUser";
import {LOGIN_ACTION} from './types'


export const login = createAction(
    LOGIN_ACTION,
    props<IUser>()
)