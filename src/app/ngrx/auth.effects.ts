import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, map, switchMap, catchError, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { AuthActionTypes, LogInAction, LogInFailureAction, LogInSuccessAction, SignUpAction, SignUpFailureAction, SignUpSuccessAction } from "./auth.actions";


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  logIn$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogInAction) => action.payload),
    switchMap(payload => {
      return this.authService.logIn(payload.email, payload.password).pipe(
        map((user) => {
          return new LogInSuccessAction({token: user.token, email: payload.email});
        }),
        catchError((error) => {
          return of(new LogInFailureAction({ errorMessage: error }));
        })
      );
    })
  ));

  signUp$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUpAction) => action.payload),
    switchMap(payload => {
      return this.authService.signUp(payload.email, payload.password).pipe(
        map((user) => {
          return new SignUpSuccessAction({token: user.token, email: payload.email});
        }),
        catchError((error) => {
          return of(new SignUpFailureAction({ errorMessage: error }));
        })
      );
    })
  ));

}