import { Injectable } from "@angular/core";
import { SparePartService } from "../services/spare-part.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { GetAllSparePartActionError, GetAllSparePartActionSucces, SparePartActionsTypes } from "./sparePart.actions";
import { Observable, catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class SparePartEffects {
    constructor(private sparepartService : SparePartService, private effectsActions : Actions){}

    getAllSparePartEffect:Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(SparePartActionsTypes.GET_ALL_SPARE_PART),
            mergeMap((action) => {
                return this.sparepartService.getSparePart().pipe(
                    map((sparePart) => new GetAllSparePartActionSucces(sparePart)),
                    catchError((err) => of(new GetAllSparePartActionError(err.message)))
                )
            })
        )
    )
}