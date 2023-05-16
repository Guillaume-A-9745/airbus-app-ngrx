import { createFeatureSelector, createSelector } from "@ngrx/store";
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

export const selectIsConnected = createSelector(
    createFeatureSelector('airbusState'),  
    (state: AircraftsState) => {
      return state.isConnected;
    }
);