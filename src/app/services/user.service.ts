import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../store/user/user.model';
import {HttpClientService} from './http-client.service';
import {
  catchError,
  mergeMap,
  pluck,
  share,
  shareReplay,
  switchMap,
  tap
} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from './localStorageService';
import {ManifestService} from './manifest.service';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

let authenticationtoken;

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const token = localStorage.getItem('invoice-web-token');
    if (token) {
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(
        req.clone({
          headers: req.headers.set('Authorization', 'Basic ' + token)
        })
      );
    }
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Basic ' + authenticationtoken)
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}

@Injectable({providedIn: 'root'})
export class UserService {
  userGroups;
  user$;

  constructor(
    private httpClient: HttpClientService,
    private http: HttpClient,
    private manifestService: ManifestService,
    private localStorageService: LocalStorageService
  ) {
    this.user$ = this.loadCurrentUser().pipe(shareReplay(1));
    this.login({username: 'admin', password: 'district'});
  }

  /**
   * Load current user information
   * @returns {Observable<User>}
   */
  loadCurrentUser(): Observable<User> {
    return new Observable(observer => {
      this.httpClient
        .get(
          `me.json?fields=id,name,displayName,created,lastUpdated,email,
  dataViewOrganisationUnits[id,name,level,parent[id,name]],organisationUnits[id,name,level,parent[id,name]],userCredentials[username,userRoles[authorities]]`
        )
        .subscribe(
          user => {
            observer.next(user);
            observer.complete();
          },
          error1 => observer.error()
        );
    });
  }

  login(credentials: { username; password }): Observable<string> {

    const meUrl =
      'me.json?fields=id,name,displayName,created,lastUpdated,email,\n    dataViewOrganisationUnits[id,name,level,parent[id,name]],organisationUnits[id,name,level,parent[id,name]],userCredentials[username,userRoles[authorities]]';
    return new Observable(observer => {
      const token = this.prepareToken(credentials);
      authenticationtoken = token; console.log(credentials);
      this.removeLocalStorageItem('invoice-web-token');
      const headers: HttpHeaders = this.createDHISAuthorizationHeader(token);
      this.manifestService.getRootUrl().subscribe(rootUrl => {
        this.http.get(rootUrl + meUrl, {headers}).subscribe(
          (data: User) => {
            localStorage.setItem('invoice-web-token', token);
            localStorage.setItem('invoice-user-id', data.id);
            localStorage.setItem(
              'invoice-user-organisation-unit',
              this.getUserOu(data)
            );
            observer.next('Login successful..');
            observer.complete();
          },
          error1 => {
            const errorMessage = error1.message;
            if (errorMessage.indexOf('Unauthorized')) {
              observer.error('Incorrect Username or Password');
            } else if (errorMessage.indexOf('unknown url')) {
              observer.error('There is no internet connection');
            } else {
              observer.error(
                'There is problem with server please contact the administrator'
              );
            }
          }
        );
      });
    });
  }

  removeLocalStorageItem(key) {
    localStorage.removeItem(`${key}`);
  }

  prepareToken(credentials: { username; password }) {
    const username = credentials.username;
    const password = credentials.password;
    const token = btoa(username + ':' + password);
    return token;
  }

  createDHISAuthorizationHeader(token) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return headers;
  }

  getUserGroups() {
    return new Observable(observable => {
      if (this.userGroups) {
        observable.next(this.userGroups);
        observable.complete();
      } else {
        this.httpClient.get('userGroups').subscribe(
          (results: any) => {
            this.userGroups = results.userGroups;
            observable.next(this.userGroups);
            observable.complete();
          },
          error => {
            observable.error(error.json());
            observable.complete();
          }
        );
      }
    });
  }

  getCurrentUser() {
    return this.user$;
  }

  getUserOu(userData: User) {
    let userOu = null;
    if (
      userData &&
      userData.organisationUnits &&
      userData.organisationUnits.length !== 0
    ) {
      userOu = userData.organisationUnits[0].id;
    } else if (
      userData &&
      userData.dataViewOrganisationUnits &&
      userData.dataViewOrganisationUnits.length !== 0
    ) {
      userOu = userData.dataViewOrganisationUnits[0].id;
    }
    return userOu;
  }

  getRoles(): Observable<any> {
    return new Observable(observer => {
      this.httpClient.get('userRoles.json?fields=id,name&paging=false&filter=name:!eq:CHW&filter=name:!eq:CSO').subscribe((success) => {
        observer.next(success.userRoles);
        observer.complete();
      }, (error) => {
        observer.error();
      });
    });

  }

  addDHISUser(user): Observable<any> {
    return new Observable(observer => {
      this.httpClient.post('users', user).subscribe((success: any) => {
        if (success.status === 'ERROR') {
          this.httpClient.put('users/' + user.id, user).subscribe((putSuccess: any) => {
            observer.next(putSuccess);
            observer.complete();
          }, (putError) => {
            observer.error(putError);
          });
        }
        observer.next(success);
        observer.complete();
      }, (error) => {

      });
    });

  }

}
