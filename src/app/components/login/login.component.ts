import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.loginUser(this.user)
    .subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have successfully logged in',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/contact']);
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        console.log(err)
      }
    )
  }
}
