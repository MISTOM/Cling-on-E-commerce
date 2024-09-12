import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://dummyjson.com';


  constructor(private http: HttpClient) { }

  login(data: { username: String, password: String }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data)
  }

  register(data: { username: String, email: String, password: String }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/add`, data)
  }

  //store the token in local storage
  storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  logout() { localStorage.removeItem('token') }






}
