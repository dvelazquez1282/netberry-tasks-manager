import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiRoutes } from '../helpers/api-routes.helper';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  private currentUser: User;


  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');
    if(token) {
      this.setToken(token);
    }    
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }
  public setCurrentUser(user: User) {
    this.currentUser = user;
  }

  public getToken(): string | null {
    return this.token;
  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public login(login: Login): Observable<any> {
    let url = ApiRoutes.getAuthLoginRoute();
    return this.http.post(url, login)
      .pipe(
        catchError(this.handleError)
      );
  }

  public me(): Observable<Object> {
    let url = ApiRoutes.getUserMeRoute();
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }
}
