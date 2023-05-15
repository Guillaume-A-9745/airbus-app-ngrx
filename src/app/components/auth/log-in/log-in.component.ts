import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { AuthState } from 'src/app/ngrx/auth.state';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user : User = new User();

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {}
 
  onSubmit(): void {}

}