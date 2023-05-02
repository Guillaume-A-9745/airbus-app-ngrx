import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { SparePartState, SparePartStateEnum } from 'src/app/ngrx/sparePart.state';

@Component({
  selector: 'app-spare-part',
  templateUrl: './spare-part.component.html',
  styleUrls: ['./spare-part.component.css']
})
export class SparePartComponent implements OnInit {
  sparePartState$:Observable<SparePartState> | null = null;
  readonly sparePartStateEnum = SparePartStateEnum;

  constructor(private store:Store<any>) {}
  
  ngOnInit(): void {
    this.sparePartState$ = this.store.pipe(
      map((state) => state.sparePart)
    )
  }

}
