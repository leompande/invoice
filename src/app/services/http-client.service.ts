import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }


  createAuthorizationHeader(token) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return headers;
  }

  get(
    url: string
  ): Observable<any> {
    const token = localStorage.getItem('tanpay-invoice-web-token');
    const headers: HttpHeaders = this.createAuthorizationHeader(token);
    return this.httpClient.get(url, {headers}).pipe(catchError(this._handleError));
  }

  getBase(
    url: string
  ): Observable<any> {
    const token = localStorage.getItem('tanpay-invoice-web-token');
    const headers: HttpHeaders = this.createAuthorizationHeader(token);
    return this.httpClient.get(url, {headers}).pipe(catchError(this._handleError));
  }

  post(
    url: string,
    data: any
  ) {
    const token = localStorage.getItem('tanpay-invoice-web-token');
    const headers: HttpHeaders = this.createAuthorizationHeader(token);
    return this.httpClient
      .post(url, data, {headers})
      .pipe(catchError(this._handleError));
  }

  put(
    url: string,
    data: any
  ) {
    const token = localStorage.getItem('tanpay-invoice-web-token');
    const headers: HttpHeaders = this.createAuthorizationHeader(token);
    return this.httpClient
      .put(url, data, {headers})
      .pipe(catchError(this._handleError));
  }

  delete(
    url: string
  ) {
    const token = localStorage.getItem('tanpay-invoice-web-token');
    const headers: HttpHeaders = this.createAuthorizationHeader(token);
    return this.httpClient
      .delete(url, {headers})
      .pipe(catchError(this._handleError));
  }

  // private methods
  private _handleError(err: HttpErrorResponse) {
    let error = null;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      error = {
        message: err.error,
        status: err.status,
        statusText: err.statusText
      };
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      error = {
        message:
          err.error instanceof Object
            ? err.error.message
            : err.error || err.message,
        status: err.status,
        statusText: err.statusText
      };
    }
    return throwError(error);
  }

}
