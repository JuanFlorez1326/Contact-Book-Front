import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_REGISTER = 'https://contactbook-back-api.herokuapp.com/signup';

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this.URL_REGISTER, user);
    console.log(URL);
  }

}
