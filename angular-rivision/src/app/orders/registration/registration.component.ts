import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userNm;
  public emailId;
  public password;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  public register() {
    localStorage.setItem('userNm', this.userNm);
    localStorage.setItem('password', this.password);
  }

  public backToLogin() {
    this.route.navigateByUrl('login');
  }
}
