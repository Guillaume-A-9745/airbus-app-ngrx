import { Injectable } from '@angular/core';
import { SparePart } from '../model/SparePart.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SparePartService {
  items: SparePart[] = [];
  searchTerm: string = '';

  constructor(private http:HttpClient) { }

  public getSparePart():Observable<SparePart[]> {
    return this.http.get<SparePart[]>(environment.host + "/spare_part");
  }
}
