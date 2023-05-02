import { Action } from "@ngrx/store";
import { SparePartActions, SparePartActionsTypes } from "./sparePart.actions";
import { SparePartState, SparePartStateEnum, initState } from "./sparePart.state";

export function SparePartReducer(state: SparePartState = initState, action:Action){
    switch (action.type) {
        case SparePartActionsTypes.GET_ALL_SPARE_PART:
            return {...state, dataState:SparePartStateEnum.LOADING}
        case SparePartActionsTypes.GET_ALL_SPARE_PART_SUCCESS:
            return {...state, dataState:SparePartStateEnum.LOADED, sparePart:(<SparePartActions> action).payload}
        case SparePartActionsTypes.GET_ALL_SPARE_PART_ERROR:
            return {...state, dataState:SparePartStateEnum.ERROR, errorMessage:(<SparePartActions> action).payload}
        default :
            return {...state}
    }
}