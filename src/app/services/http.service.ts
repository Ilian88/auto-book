import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { AUTH_ENDPOINTS } from './endpoints.type';

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
}
