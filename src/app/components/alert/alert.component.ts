import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftStateEnum } from 'src/app/ngrx/aircrafts.state';
import { GetAlertAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  aircraftsState$:Observable<AircraftsState> | null = null;
  readonly aircraftsStateEnum = AircraftStateEnum;

  constructor(private store:Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAlertAircraftsAction({}));
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }
}
