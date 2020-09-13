import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName;
  public userPswd;
  constructor(private route: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  Login() {
    const name = localStorage.getItem('userNm');
    const password = localStorage.getItem('password');
    if (name === this.userName && password === this.userPswd) {
      this.route.navigateByUrl('heroes');
      this.snackbar.open('login successfully', 'Dismiss');
    } else {
      console.log('user is invalid');
    }
  }

  navToRegister() {
    this.route.navigateByUrl('register');
  }
}
