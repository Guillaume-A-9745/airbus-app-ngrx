import { User } from '../model/user.model';

export enum AuthStateEnum {
  CONNECTED = "Connected",
  DISCONNCTED = "Disconnected",
  ERROR = "Error",
  INITIAL = "Initial"
}

export interface AuthState {
  isAuthenticated: boolean,       // is a user authenticated?
  user: User | null,              // if authenticated, there should be a user object
  errorMessage: string | null,    // error message
  dataState: AuthStateEnum
}
  
export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  dataState: AuthStateEnum.INITIAL
};