import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { SparePartComponent } from './components/spare-part/spare-part.component';
import { SparePartNavbarComponent } from './components/spare-part/spare-part-navbar/spare-part-navbar.component';
import { SparePartReducer } from './ngrx/sparePart.reducer';
import { SparePartEffects } from './ngrx/sparePart.effects';


@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AlertComponent,
    SparePartComponent,
    SparePartNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({airbusState : AircraftsReducer, sparePart : SparePartReducer}),
    EffectsModule.forRoot([AircraftsEffects, SparePartEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
