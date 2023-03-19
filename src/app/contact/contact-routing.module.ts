import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'contact/add',
        component: CreateContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}