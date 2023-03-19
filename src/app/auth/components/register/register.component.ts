import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  register() {
    this.authService.registerUser(this.user)
    .subscribe(
      res => {
        this.router.navigate(['/contact']);
      },
      err => {
        console.log(err)
      }
    )
  }
}
