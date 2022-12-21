const host = 'http://localhost:'
const port = '8080'
const baseUrl = host + port;

export const AUTH_ENDPOINTS = {
    register: baseUrl + '/users/register',
    login: baseUrl + '/users/login'
}

export const GET_ALL_USERS = baseUrl + '/users'
export const CHANGE_USER_ROLE = baseUrl + '/users/admin'
export const GET_ALL_CARS = baseUrl + '/cars';
export const CREATE_CAR = baseUrl + '/cars/create';
export const UPDATE_CAR = GET_ALL_CARS + '/update';
export const DELETE_CAR = GET_ALL_CARS + '/delete';

