import { AuthActionTypes } from './auth.actions';
import { AuthState, AuthStateEnum, initialState } from './auth.state';
import { Action } from "@ngrx/store";

export function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        errorMessage: null,
        dataState: AuthStateEnum.CONNECTED
      };
    }

    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: action.payload.error,
        dataState: AuthStateEnum.ERROR
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: null,
        dataState: AuthStateEnum.DISCONNCTED
      };
    }

    default:
      return state;
  }
}
