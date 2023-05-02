import { AircraftActionsTypes } from "../components/aircrafts/aircrafts-navbar/aircraftsActionsTypes";
import { SparePartActionsTypes } from "../ngrx/sparePart.actions";

export interface ActionEvent {
    type : AircraftActionsTypes | SparePartActionsTypes,
    payload : any
}
