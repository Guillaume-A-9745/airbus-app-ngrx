import { SparePart } from "../model/SparePart.model";

export enum SparePartStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface SparePartState {
    sparePart : SparePart[],
    errorMessage : string,
    dataState : SparePartStateEnum
}

export const initState : SparePartState = {
    sparePart: [],
    errorMessage:"",
    dataState:SparePartStateEnum.INITIAL
}