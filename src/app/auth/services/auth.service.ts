import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment as api } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_REGISTER = api.baseUrl;

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

    Swal.fire({
      title: 'Do you want to close the session?',
      showDenyButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      } else if (result.isDenied) {
        Swal.fire('The current session was not closed')
      }
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

}