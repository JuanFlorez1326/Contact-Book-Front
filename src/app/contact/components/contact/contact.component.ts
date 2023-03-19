import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: any = []

  constructor( 
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(
      res => {
        this.contacts = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteContact(_id: string) {
    this.contactService.deleteContact(_id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
        this.router.navigate(['/contact']);
      },
      err => {
        console.log(err)
      }
    )
  }
}
