import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  user : User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {}
  
}
