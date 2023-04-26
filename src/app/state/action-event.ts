import { AircraftActionsTypes } from "../components/aircrafts/aircrafts-navbar/aircraftsActionsTypes";

export interface ActionEvent {
    type : AircraftActionsTypes,
    payload : any
}
