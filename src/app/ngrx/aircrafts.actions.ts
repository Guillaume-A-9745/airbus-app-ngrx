import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/model/Aircraft.model";

export enum AircraftActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",

    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Developed Aircrafts Success",
    GET_DEVELOPMENT_AIRCRAFTS_ERROR = "[Aircrafts] Get Developed Aircrafts Error",

    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_SEARCH_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Search Aircrafts Success",
    GET_SEARCH_AIRCRAFTS_ERROR = "[Aircrafts] Get Search Aircrafts Error",

    GET_ALERT_AIRCRAFTS = "[Aircrafts] Get ALERT Aircrafts",
    GET_ALERT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get ALERT Aircrafts Success",
    GET_ALERT_AIRCRAFTS_ERROR = "[Aircrafts] Get ALERT Aircrafts Error"
}

export class GetAllAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any){}
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){}
}
export class GetAllAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
}

export class GetDesignedAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any){}
}
export class GetDesignedAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){}
}
export class GetDesignedAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
}

export class GetDevelopmentAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload:any){}
}
export class GetDevelopmentAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){}
}
export class GetDevelopmentAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
}

export class GetSearchAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_SEARCH_AIRCRAFTS;
    constructor(public payload:any){}
}
export class GetSearchAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_SEARCH_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){}
}
export class GetSearchAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_SEARCH_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
}

export class GetAlertAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALERT_AIRCRAFTS;
    constructor(public payload:any){}
}
export class GetAlertAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALERT_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){}
}
export class GetAlertAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALERT_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
}

export type AircraftsActions = GetAlertAircraftsAction | GetAlertAircraftsActionSuccess | GetAlertAircraftsActionError |GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError | GetDevelopmentAircraftsAction | GetDevelopmentAircraftsActionSuccess | GetDevelopmentAircraftsActionError | GetSearchAircraftsAction | GetSearchAircraftsActionSuccess | GetSearchAircraftsActionError;