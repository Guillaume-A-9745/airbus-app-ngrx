import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  //renvoi un utilisateur en base
  public login(user:any) : Observable<User> {
    return this.http.get<User>(environment.host + "/users?email="+user.email+"&pwd="+user.pwd);
  }
  
}
