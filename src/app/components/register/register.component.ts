import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  ngOnInit(): void {
  }

  register() {
    this.authService.registerUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contact']);
      },
      err => {
        console.log(err)
      }
    )
  }
}
