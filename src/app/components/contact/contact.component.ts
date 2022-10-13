import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: any = []

  constructor( private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(
      res => {
        console.log(res);
        this.contacts = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
