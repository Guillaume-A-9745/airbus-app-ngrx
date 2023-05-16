import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsConnected } from 'src/app/ngrx/aircrafts.selectors';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent {

  isConnected$: Observable<Boolean> | null = null;


  constructor(private store:Store<any>, private router : Router) {
    this.isConnected$ = store.select(selectIsConnected);
  }
}
