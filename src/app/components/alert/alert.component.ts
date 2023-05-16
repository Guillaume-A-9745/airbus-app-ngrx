import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftStateEnum } from 'src/app/ngrx/aircrafts.state';
import { GetAlertAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { Router } from '@angular/router';
import { selectIsConnected } from 'src/app/ngrx/aircrafts.selectors';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  aircraftsState$:Observable<AircraftsState> | null = null;
  readonly aircraftsStateEnum = AircraftStateEnum;
  isConnected$: Observable<Boolean> | null = null;


  constructor(private store:Store<any>, private router : Router) {
    this.isConnected$ = store.select(selectIsConnected);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAlertAircraftsAction({}));
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }
}
