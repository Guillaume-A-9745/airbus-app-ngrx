import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../model/user.model';
import {v4 as uuid} from 'uuid';

@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

 getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  //effectue une requête GET pour récupérer l'utilisateur correspondant à l'email et au mot de passe fournis
  logIn(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/users?email=${email}&password=${password}`;
    return this.http.get<User[]>(url).pipe(
      map(users => {
        if (users.length === 0) {
          throw new Error('Invalid email or password');
        }
        const user = users[0];
        localStorage.setItem('user', JSON.stringify(user));  //stocke l'utilisateur et le jeton JWT dans le stockage local.
        localStorage.setItem('token', 'jwt_token_here');
        return user;
      }),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  //Crée un nouvel utilisateur avec les données envoyées
  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/users`;
    const id = uuid();
    const user: User = { id, email, password, isAdmin: false }; // Créer un utilisateur avec les données envoyées
    return this.http.post<User>(url, user).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user)); //Stocke l'utilisateur et le jeton JWT dans le stockage local.
        localStorage.setItem('token', 'jwt_token_here');
        return user;
      }),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  //Supprime l'utilisateur et le jeton JWT du stockage local
  logOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  //Renvoie l'utilisateur actuellement connecté 
  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return null;
    }
    return JSON.parse(userJson) as User;
  }

  //Renvoie true si un utilisateur est connecté, false sinon.
  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}

function uuidv4() {
  throw new Error('Function not implemented.');
}
