import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    CreateContactComponent,
    ContactComponent
  ]
})
export class ContactModule {}