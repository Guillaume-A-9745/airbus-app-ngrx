import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsConnected } from './ngrx/aircrafts.selectors';
import { LogoutAction } from './ngrx/login/logout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airbus-app-ngrx';

  isConnected$: Observable<Boolean> | null = null;
    
  constructor(private store:Store<any>, private router: Router) {
    this.isConnected$ = store.select(selectIsConnected);
  }

  ngOnInit(): void { 
  }
  
  onLogout(){
    this.store.dispatch(new LogoutAction());
    this.router.navigate(['login']);
  }
  
}
