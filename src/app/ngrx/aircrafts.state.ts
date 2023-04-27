import { EntityState } from "@ngrx/entity";
import { Aircraft } from "../model/Aircraft.model";

export enum AircraftStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AircraftsState extends EntityState<Operation>{
    aircrafts : Aircraft[],
    errorMessage:string,
    dataState: AircraftStateEnum
}

export const initState : AircraftsState = {
    aircrafts: [],
    errorMessage:"",
    dataState:AircraftStateEnum.INITIAL,
    ids: [],
    entities: {}
}