import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/Aircraft.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/DataStateEnum';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit{
  @Output() eventEmitter : EventEmitter<any> =new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getAllAircrafts() {
    this.eventEmitter.emit("ALL_AIRCRAFTS");
  }
  getDesignedAircrafts() {
    this.eventEmitter.emit("BY_DESIGN_AIRCRAFTS");
  }
  getDevelopementAircrafts() {
    this.eventEmitter.emit("BY_DEVELOP_AIRCRAFTS");

  }
}
