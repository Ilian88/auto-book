import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from 'app/models/ICar';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { AUTH_ENDPOINTS, CHANGE_USER_ROLE, CREATE_CAR, DELETE_CAR, GET_ALL_CARS, GET_ALL_USERS, UPDATE_CAR } from './endpoints.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  register(user: IUser): Observable<unknown> {
    return this.http.post(AUTH_ENDPOINTS.register, user);
  }

  login(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(AUTH_ENDPOINTS.login, {username, password});
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(GET_ALL_USERS);
  }

  changeUserRole(username: string, role: string) {
    return this.http.patch(CHANGE_USER_ROLE, {username, role});
  }

  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(GET_ALL_CARS);
  }

  getCarById(id: string): Observable<ICar> {
    return this.http.get<ICar>(GET_ALL_CARS + '/' + id)
  }

  createCar(car: ICar) {
    return this.http.post<ICar>(CREATE_CAR, car);
  }
 
  updateCar(id: number, car: ICar) {
    return this.http.patch<ICar>(UPDATE_CAR + '/' + id, car);
  }

  deleteCar(id: number) {
    return this.http.delete(DELETE_CAR + '/' + id);
  }
}
