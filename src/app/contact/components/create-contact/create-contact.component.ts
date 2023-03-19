import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {

  contact = {
    _id: '',
    name: '',
    lastname: '',
    business: '',
    phone: '',
    email: '',
    role: ''
  }

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  createContact() {
    this.contactService.createContact(this.contact)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contacts/contact']);
      },
      err => {
        console.log(err)
      }
    )
  }
}