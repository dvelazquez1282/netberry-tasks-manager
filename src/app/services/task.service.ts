import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiRoutes } from '../helpers/api-routes.helper';
import { Task } from '../models/taks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  
  public list(): Observable<any> {
    let url = ApiRoutes.getListTaskRoute();
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  public store(task: Task): Observable<any> {
    let url = ApiRoutes.getStoreTaskRoute();
    return this.http.post(url, task)
      .pipe(
        catchError(this.handleError)
      );
  }
  public update(task: Task): Observable<any> {
    let url = ApiRoutes.getUpdateTaskRoute(task.id);
    return this.http.post(url, task)
      .pipe(
        catchError(this.handleError)
      );
  }
  public delete(task: Task): Observable<any> {
    let url = ApiRoutes.getDeleteTaskRoute(task.id);
    return this.http.post(url, task)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }
}
