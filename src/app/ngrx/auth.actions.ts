import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',

  LOGOUT = '[Auth] Logout'
}

export class LogInAction implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: { email: string, password: string }) {}
}

export class LogInSuccessAction implements Action {  //retournent le token JWT et l'utilisateur authentifié
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User, token: string }) {}
}

export class LogInFailureAction implements Action {  //retournent un message d'erreur
  readonly type = AuthActionTypes.LOGIN_FAILURE;

  constructor(public payload: { errorMessage: string }) {}
}

export class SignUpAction implements Action {
  readonly type = AuthActionTypes.SIGNUP;

  constructor(public payload: { email: string, password: string }) {}
}

export class SignUpSuccessAction implements Action {  //retournent le token JWT et l'utilisateur authentifié
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;

  constructor(public payload: { user: User, token: string }) {}
}

export class SignUpFailureAction implements Action {  //retournent un message d'erreur
  readonly type = AuthActionTypes.SIGNUP_FAILURE;

  constructor(public payload: { errorMessage: string }) {}
}

export class LogOutAction implements Action { 
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions =
  | LogInAction
  | LogInSuccessAction
  | LogInFailureAction
  | SignUpAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | LogOutAction;
