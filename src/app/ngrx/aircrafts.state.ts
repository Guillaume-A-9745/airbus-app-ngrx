import { Aircraft } from "../model/Aircraft.model";
import { User } from "../model/user.model";

export enum AircraftStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}
export enum LoginStateEnum{  
    REQUEST_LOGIN     = "request login",            //demande d'authentification
    RESPONSE_LOGIN_OK = "response login ok",        //demande d'auth accepté
    RESPONSE_LOGIN_DENIED = "response login nok",   //demande d'auth refusé
    ERROR = "Error",                                //erreur 
    INITIAL = "Initial"                             //état initial
}

export interface AircraftsState {
    aircrafts : Aircraft[],
    errorMessage:string,
    dataState: AircraftStateEnum,
    loginState : LoginStateEnum,
    userConnected : User,
    isConnected : boolean
}

export const initState : AircraftsState = {
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftStateEnum.INITIAL,
    loginState : LoginStateEnum.INITIAL,
    userConnected : {} as User,
    isConnected : false
}