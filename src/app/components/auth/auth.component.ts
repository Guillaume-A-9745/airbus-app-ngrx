import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  authStatus!: boolean;

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.authStatus = this.authservice.isAuth;
  }

  onSignIn() {
    this.authservice.signIn();
    this.authStatus = this.authservice.isAuth;
  }
  onSignOut() {
    this.authservice.signOut();
    this.authStatus = this.authservice.isAuth;
  }

}