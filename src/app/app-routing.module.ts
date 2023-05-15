import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AlertComponent } from './components/alert/alert.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

const routes: Routes = [
  {path:"aircrafts",component:AircraftsComponent},
  {path:"alert",component:AlertComponent},
  {path:"illustration",component:IllustrationComponent},
  {path:"logIn",component:LogInComponent},
  {path:"signUp",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
