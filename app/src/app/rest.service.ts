/*import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getTodos(): Observable<any> {

    const apiUrl = "http://localhost:3000/api/todos";

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  getTodo(id:any): Observable<any> {

    const apiUrl = "http://localhost:3000/api/todo/" + id;

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

}*/


import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
		} else {
		    // The backend returned an unsuccessful response code.
		    // The response body may contain clues as to what went wrong,
		    console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
    // return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	}

	private extractData(res: Response) {
		let body = res;
		return body || { };
	}

	getTodos(): Observable<any> {

		const apiUrl = "http://localhost:3000/api/todos";

		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));

	}

	getTodo(id:any): Observable<any> {

		const apiUrl = "http://localhost:3000/api/todo/" + id;

		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));

	}

	editTodo(id:any, title:any, description:any) {
		
		const apiUrl = "http://localhost:3000/api/update/todo/" + id;
		var postData = {
			'title' : title,
			'description' : description
		}
		return this.http.put(apiUrl, postData, httpOptions).
		subscribe(res => {
			console.log(res);
			this.getTodos();
		}, err => {
			console.log(err);
		});
	}

	deleteTodo(id:any) : Observable<any> {

		const apiUrl = "http://localhost:3000/api/delete/todo/" + id;
	    // console.log("id from rest serv" +id);
	    // console.log(this.http.delete(apiUrl));
	    return this.http.delete(apiUrl, httpOptions).pipe(

	    	catchError(this.handleError));

	}


}