import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/Aircraft.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/DataStateEnum';
import { ActionEvent } from './aircrafts-navbar/action-event';
import { AircraftActionsTypes } from './aircrafts-navbar/aircraftsActionsTypes';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit{
  
  constructor(private aircraftService:AircraftService) {}

  ngOnInit(): void {}

  // -----------------------------
  // ----------OPTION 3-----------
  // -----------------------------

  aircrafts$:Observable<AppDataState<Aircraft[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;

  OnActionEvent($actionEvent : ActionEvent) {
    switch ($actionEvent.type) {
      case AircraftActionsTypes.GET_ALL_AIRCRAFTS:
        this.getAllAircrafts();
        break;
      case AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS:
        this.getDesignedAircrafts()
        break;
      case AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
        this.getDevelopementAircrafts()
        break;
      case AircraftActionsTypes.GET_SEARCH_AIRCRAFTS:
        this.search($actionEvent.payload);
        break;
      default:
        break;
    }
  }
  
  search(payload: any) {
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => data.filter(a => a.prog.includes(payload))),
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  getAllAircrafts() {
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  getDesignedAircrafts() {
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  getDevelopementAircrafts() {
    this.aircrafts$ = this.aircraftService.getDevelopementAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )
  }

  // -----------------------------
  // ----------OPTION 2-----------
  // -----------------------------

  // aircrafts$:Observable<Aircraft[]> | null = null;
  // error = null;

  // getAllAircrafts() {
  //   this.aircrafts$ = this.aircraftService.getAircrafts();
  // }
  // getDesignedAircrafts(){
  //   this.aircrafts$ = this.aircraftService.getDesignedAircrafts();
  // }
  // getDevelopementAircrafts(){
  //   this.aircrafts$ = this.aircraftService.getDevelopementAircrafts();
  // }

  // -----------------------------
  // ----------OPTION 1-----------
  // -----------------------------
  
  // aircrafts : Aircraft[] | null = null; //soit un tableau d'avion soit null d'ou l'affectation
  // error = null;

  // getAllAircrafts(){
  //   this.aircraftService.getAircrafts().subscribe({
  //     next : (data) => this.aircrafts = data,
  //     error : (err) => this.error = err.message,
  //     complete : () => this.error = null
  //   })
  // }

  // getDesignedAircrafts(){
  //   this.aircraftService.getDesignedAircrafts().subscribe({
  //     next : (data) => this.aircrafts = data,
  //     error : (err) => this.error = err.message,
  //     complete : () => this.error = null
  //   })
  // }

  // getDevelopementAircrafts(){
  //   this.aircraftService.getDevelopementAircrafts().subscribe({
  //     next : (data) => this.aircrafts = data,
  //     error : (err) => this.error = err.message,
  //     complete : () => this.error = null
  //   })
  // }
}
