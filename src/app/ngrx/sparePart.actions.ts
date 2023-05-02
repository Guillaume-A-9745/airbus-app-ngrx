import { Action } from "@ngrx/store";

export enum SparePartActionsTypes {
    GET_ALL_SPARE_PART = "[SparePart] Get all SparePart",
    GET_ALL_SPARE_PART_SUCCESS = "[SparePart] Get all SparePart Success",
    GET_ALL_SPARE_PART_ERROR = "[SparePart] Get all SparePart Error"
}

export class GetAllSparePartAction implements Action{
    type: SparePartActionsTypes = SparePartActionsTypes.GET_ALL_SPARE_PART;
    constructor(public payload:any){}
}
export class GetAllSparePartActionSucces implements Action{
    type: SparePartActionsTypes = SparePartActionsTypes.GET_ALL_SPARE_PART_SUCCESS;
    constructor(public payload:any){}
}
export class GetAllSparePartActionError implements Action{
    type: SparePartActionsTypes = SparePartActionsTypes.GET_ALL_SPARE_PART_ERROR;
    constructor(public payload:any){}
}

export type SparePartActions = GetAllSparePartAction | GetAllSparePartActionSucces | GetAllSparePartActionError;