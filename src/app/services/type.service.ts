import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiRoutes } from '../helpers/api-routes.helper';
import { Task } from '../models/taks.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {}

  
  public list(): Observable<any> {
    let url = ApiRoutes.getListTypeRoute();
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
