import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AlertComponent } from './components/alert/alert.component';
import { SparePartComponent } from './components/spare-part/spare-part.component';

const routes: Routes = [
  {path:"aircrafts",component:AircraftsComponent},
  {path:"alert",component:AlertComponent},
  {path:"sparePart",component:SparePartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
