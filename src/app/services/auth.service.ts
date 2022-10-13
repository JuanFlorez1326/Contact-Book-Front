import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_REGISTER = 'https://contactbook-back-api.herokuapp.com';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user: any) {
    return this.http.post<any>(this.URL_REGISTER + '/signup', user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this.URL_REGISTER + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
