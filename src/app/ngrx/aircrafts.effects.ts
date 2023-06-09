import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { AircraftActionsTypes, GetAlertAircraftsAction, GetAlertAircraftsActionError, GetAlertAircraftsActionSuccess, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopmentAircraftsAction, GetDevelopmentAircraftsActionError, GetDevelopmentAircraftsActionSuccess, GetSearchAircraftsAction, GetSearchAircraftsActionError, GetSearchAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable()
export class AircraftsEffects {
    constructor(private airecraftService: AircraftService, private effectActions : Actions) {}

    getAllAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.airecraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDesignedAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action) => {
                return this.airecraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDevelopmentAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action) => {
                return this.airecraftService.getDevelopementAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
        )
    );

    getSearchAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionsTypes.GET_SEARCH_AIRCRAFTS),
            mergeMap((action : GetSearchAircraftsAction) => {
                return this.airecraftService.getAircrafts().pipe(
                    map(aircrafts => aircrafts.filter(a => a.prog.toLowerCase().includes(action.payload.toLowerCase()))),
                    map((aircrafts) => new GetSearchAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetSearchAircraftsActionError(err.message)))
                )
            })
        )
    );

    getAlerthAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionsTypes.GET_ALERT_AIRCRAFTS),
            mergeMap((action : GetAlertAircraftsAction) => {
                return this.airecraftService.getAircrafts().pipe(
                    map(aircrafts => aircrafts.filter(a => a.development == true && a.design == true)),
                    map((aircrafts) => new GetAlertAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetAlertAircraftsActionError(err.message)))
                )
            })
        )
    );
}
