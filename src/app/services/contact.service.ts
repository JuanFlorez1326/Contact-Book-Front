import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private URL_CONTACTS = 'https://contactbook-back-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getContacts ()  {
    return this.http.get<any>(this.URL_CONTACTS + '/contact');
  }
}
