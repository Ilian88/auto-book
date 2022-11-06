const host = 'localhost:'
const port = '8080'
const baseUrl = host + port;

export const AUTH_ENDPOINTS = {
    register: baseUrl + '/register',
    login: baseUrl + '/login'
}