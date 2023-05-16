import { Action } from "@ngrx/store";
import { AircraftsState, LoginStateEnum, initState } from "./aircrafts.state"
import { AircraftActionsTypes, AircraftsActions } from "./aircrafts.actions";
import { AircraftStateEnum } from "./aircrafts.state";
import { User } from "../model/user.model";
import { LoginActionsTypes } from "./login/login.actions";
import { LogoutActionsTypes } from "./login/logout.actions";

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

        case AircraftActionsTypes.GET_ALERT_AIRCRAFTS:
            return {...state, dataState:AircraftStateEnum.LOADING}
        case AircraftActionsTypes.GET_ALERT_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}  
        case AircraftActionsTypes.GET_ALERT_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Login ou demande d'authenfication
        case LoginActionsTypes.LOGIN :
            return {...state, loginState:LoginStateEnum.INITIAL}
        case LoginActionsTypes.LOGIN_SUCCESS :
            return {...state, loginState:LoginStateEnum.RESPONSE_LOGIN_OK, userConnected:(<AircraftsActions> action).payload, isConnected:true}
        case LoginActionsTypes.LOGIN_DENIED :
            return {...state, loginState:LoginStateEnum.RESPONSE_LOGIN_DENIED, isConnected:false}
        case LoginActionsTypes.LOGIN_ERROR :
            return {...state, loginState:LoginStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Logout
        case LogoutActionsTypes.LOGOUT :
            return {...state, loginState:LoginStateEnum.INITIAL, userConnected:{} as User, isConnected:false}
        case LogoutActionsTypes.LOGOUT_SUCCESS :
        case LogoutActionsTypes.LOGOUT_ERROR :
            return {...state, loginState:LoginStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
            
        default : 
            return {...state}
    }
}