import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllSparePartAction } from 'src/app/ngrx/sparePart.actions';

@Component({
  selector: 'app-spare-part-navbar',
  templateUrl: './spare-part-navbar.component.html',
  styleUrls: ['./spare-part-navbar.component.css']
})
export class SparePartNavbarComponent implements OnInit{
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  payload: string = '';

  constructor(private store : Store<any>){};
  
  ngOnInit(): void {}

  getAllSparePart(){
    this.store.dispatch(new GetAllSparePartAction({}));
  };
  SearchSpare(){};
}
