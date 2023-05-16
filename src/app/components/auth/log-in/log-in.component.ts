import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AircraftsState, LoginStateEnum } from 'src/app/ngrx/aircrafts.state';
import { LoginAction } from 'src/app/ngrx/login/login.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  myForm : FormGroup;
  user : User | undefined;
  error : string | undefined;
  connected : boolean = false;

  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly loginStateEnum = LoginStateEnum;

  constructor(private store:Store<any> , private formBuilder : FormBuilder, private route:Router) {
    this.myForm = this.formBuilder.group({
      email : ['', [Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      pwd : ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => { 
        if(state.airbusState.isConnected) {
          this.route.navigateByUrl('aircrafts');
        }
        return state.airbusState;
      })  
    );  
  }

  onLogin(form : FormGroup): void {
    if(form.valid){
      this.store.dispatch(new LoginAction(form.value));
    }
  }
}