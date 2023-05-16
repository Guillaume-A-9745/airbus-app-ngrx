import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AlertComponent } from './components/alert/alert.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { AircraftService } from './services/aircraft.service';
import { LoginEffects } from './ngrx/login/login.effects';


@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AlertComponent,
    IllustrationComponent,
    AuthComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({airbusState : AircraftsReducer}),
    EffectsModule.forRoot([AircraftsEffects, LoginEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [AircraftService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
