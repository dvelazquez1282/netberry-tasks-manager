import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiRoutes } from '../helpers/api-routes.helper';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null;
  private currentUser: User | null;


  constructor(private http: HttpClient, private router: Router) {
    let token = localStorage.getItem('token');
    if(token) {
      this.setToken(token);
      this.me();
    }    
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }
  public setCurrentUser(user: User | null) {
    this.currentUser = user;
  }

  public getToken(): string | null {
    return this.token;
  }
  public setToken(token: string | null) {    
    this.token = token;
    if(token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }    
  }

  public login(login: Login): Observable<any> {
    let url = ApiRoutes.getAuthLoginRoute();
    return this.http.post(url, login)
      .pipe(
        catchError(this.handleError)
      );
  }

  public logout() {
    this.setCurrentUser(null);
    this.setToken(null);
  }

  public me() {
    let url = ApiRoutes.getUserMeRoute();
    let observable: Observable<any> = this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
      observable.subscribe({
        next: (res: UserResponse)=> {
            this.setCurrentUser(res);
        },
        error: (error) => {
            this.router.navigate(['login'])
        }
      });
  }


  private handleError(error: HttpErrorResponse) {    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }
}
