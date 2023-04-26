import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../model/Aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  items: Aircraft[] = [];
  searchTerm: string = '';

  constructor(private http:HttpClient) { }  
  
  //Liste de tous les avions en base => une fois sur 2 on souhaite provaquer une erreur 
  public getAircrafts():Observable<Aircraft[]> {
    let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host + "/aircrafts");
  }

  //Liste des avions en phase design
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  //Liste des avions en phase de développement
  public getDevelopementAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }

  //Renvoi un avion à partir de l'id
  public getAircraftByMsn(id:number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);
  }

}
