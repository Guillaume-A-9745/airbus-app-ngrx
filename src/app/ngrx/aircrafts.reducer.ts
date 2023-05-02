import { Action } from "@ngrx/store";
import { AircraftsState, initState } from "./aircrafts.state"
import { AircraftActionsTypes, AircraftsActions } from "./aircrafts.actions";
import { AircraftStateEnum } from "./aircrafts.state";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Operation } from "../model/Operation.model";

export function AircraftsReducer(state : AircraftsState = initState, action:Action) : AircraftsState {
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

        case AircraftActionsTypes.ADD_OPERATION:
            return adapter.addOne((<AircraftsActions> action).payload, state);
        case AircraftActionsTypes.REMOVE_OPERATION:
            return adapter.removeOne((<AircraftsActions> action).payload, state);

        default : 
            return {...state}
    }
}

export const adapter: EntityAdapter<Operation> = createEntityAdapter<Operation>({});

export const initialiState: AircraftsState = adapter.getInitialState({
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftStateEnum.INITIAL,
    ids: [],
    entities: {}
});