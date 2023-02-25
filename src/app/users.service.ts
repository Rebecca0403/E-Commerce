import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersInterface } from './users';

@Injectable({
  providedIn: 'root',
})
export class usersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<usersInterface[]>('https://api.github.com/users');
  }
}
