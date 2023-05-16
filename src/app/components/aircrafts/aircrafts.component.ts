import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AircraftStateEnum, AircraftsState } from 'src/app/ngrx/aircrafts.state';
import { selectCountAlertAircrafts, selectIsConnected } from 'src/app/ngrx/aircrafts.selectors';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit{
  aircraftsState$:Observable<AircraftsState> | null = null;
  readonly aircraftsStateEnum = AircraftStateEnum;
  countAlertAircrafts$ : Observable<number> | undefined;
  isConnected$: Observable<Boolean> | null = null;

  constructor(private store:Store<any>, private router : Router) {
    this.countAlertAircrafts$ = store.select(selectCountAlertAircrafts);
    this.isConnected$ = store.select(selectIsConnected);
  }
  
  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }
  
    


  // constructor(private aircraftService:AircraftService, private eventService:EventService) {}

  // ngOnInit(): void {
  //   this.eventService.eventSubjectObservable.subscribe((actionEvent : ActionEvent) => {
  //     this.OnActionEvent(actionEvent);
  //   })
  // }

  // -----------------------------
  // ----------OPTION 3-----------
  // -----------------------------


  // readonly dataStateEnum = DataStateEnum;

  // OnActionEvent($actionEvent : ActionEvent) {
  //   switch ($actionEvent.type) {
  //     case AircraftActionsTypes.GET_ALL_AIRCRAFTS:
  //       this.getAllAircrafts();
  //       break;
  //     case AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS:
  //       this.getDesignedAircrafts()
  //       break;
  //     case AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
  //       this.getDevelopementAircrafts()
  //       break;
  //     case AircraftActionsTypes.GET_SEARCH_AIRCRAFTS:
  //       this.search($actionEvent.payload);
  //       break;
  //     default:
  //       break;
  //   }
  // }
  
  // search(payload: any) {
  //   this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
  //     map(data => data.filter(a => a.prog.includes(payload))),
  //     map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  //     startWith({dataState : DataStateEnum.LOADING}),
  //     catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
  //   )
  // }

  // getAllAircrafts() {
  //   this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
  //     map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  //     startWith({dataState : DataStateEnum.LOADING}),
  //     catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
  //   )
  // }

  // getDesignedAircrafts() {
  //   this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
  //     map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  //     startWith({dataState : DataStateEnum.LOADING}),
  //     catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
  //   )
  // }

  // getDevelopementAircrafts() {
  //   this.aircrafts$ = this.aircraftService.getDevelopementAircrafts().pipe(
  //     map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  //     startWith({dataState : DataStateEnum.LOADING}),
  //     catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
  //   )
  // }

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
