import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Aircraft } from "../model/Aircraft.model";
import { AircraftsState } from "./aircrafts.state";

export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),
    (state: AircraftsState) => {
        let total: number = 0;
        state.aircrafts.forEach(a => {
            if (a.development == true && a.design == true) total++;
        })
        return total;
    }
);