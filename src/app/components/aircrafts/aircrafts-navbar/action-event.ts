import { AircraftActionsTypes } from "./aircraftsActionsTypes";

export interface ActionEvent {
    type : AircraftActionsTypes,
    payload : any
}
