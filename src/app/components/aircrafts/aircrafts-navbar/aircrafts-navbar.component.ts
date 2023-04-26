import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/Aircraft.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/DataStateEnum';
import { AircraftActionsTypes } from './aircraftsActionsTypes';
import { EventService } from 'src/app/state/event.service';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, GetSearchAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit{
  @Output() eventEmitter : EventEmitter<any> =new EventEmitter();
  payload: string = '';
  
  constructor(private store:Store<any>) {}
  // constructor(private eventService:EventService) {}

  ngOnInit(): void {}

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
    // this.eventService.publishEvent({type : AircraftActionsTypes.GET_ALL_AIRCRAFTS , payload : null});
    // this.eventEmitter.emit({type : AircraftActionsTypes.GET_ALL_AIRCRAFTS , payload : null});
  }
  getDesignedAircrafts() {
    this.store.dispatch(new GetDesignedAircraftsAction({}));
    // this.eventService.publishEvent({type : AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS , payload : null});
    // this.eventEmitter.emit({type : AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS , payload : null});
  }
  getDevelopementAircrafts() {
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
    // this.eventService.publishEvent({type : AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS , payload : null});
    // this.eventEmitter.emit({type : AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS , payload : null});
  }
  onSearch(value : any) {
    this.store.dispatch(new GetSearchAircraftsAction({}));
    // this.eventService.publishEvent({type : AircraftActionsTypes.GET_SEARCH_AIRCRAFTS , payload : value});
    // this.eventEmitter.emit({type : AircraftActionsTypes.GET_SEARCH_AIRCRAFTS , payload : value});
  }
}
