import { Action } from "@ngrx/store";
import { AircraftsState, initState } from "./aircrafts.state"
import { AircraftActionsTypes, AircraftsActions } from "./aircrafts.actions";
import { AircraftStateEnum } from "./aircrafts.state";

export function AircraftsReducer(state : AircraftsState = initState, action:Action) {
    switch (action.type) {
        case AircraftActionsTypes.GET_ALL_AIRCRAFTS:
            return {...state, dataState:AircraftStateEnum.LOADING}
        case AircraftActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}  
        case AircraftActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        case AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS:
            return {...state, dataState:AircraftStateEnum.LOADING}
        case AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}  
        case AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
        
        case AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
            return {...state, dataState:AircraftStateEnum.LOADING}
        case AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}  
        case AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        case AircraftActionsTypes.GET_SEARCH_AIRCRAFTS:
            return {...state, dataState:AircraftStateEnum.LOADING}
        case AircraftActionsTypes.GET_SEARCH_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}  
        case AircraftActionsTypes.GET_SEARCH_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        default : 
            return {...state}
    }
}