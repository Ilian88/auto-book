const host = 'http://localhost:'
const port = '8080'
const baseUrl = host + port;

export const AUTH_ENDPOINTS = {
    register: baseUrl + '/users/register',
    login: baseUrl + '/users/login'
}

export const CARS_ENDPOINTS = {
    getAll: baseUrl + '/cars'
}