import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
