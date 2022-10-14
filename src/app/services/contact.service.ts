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

  getContact (id: string)  {
    return this.http.get<any>(this.URL_CONTACTS + '/contact/:id' + id);
  }

  createContact (contact: any)  {
    return this.http.post<any>(this.URL_CONTACTS + '/contact/add', contact);
  }

  updateContact (id: string, contact: any)  {
    return this.http.put<any>(this.URL_CONTACTS + '/contact/:id' + id, contact);
  }

  deleteContact (id: string)  {
    return this.http.delete<any>(this.URL_CONTACTS + '/contact/' + id);
  }
}