import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {LoginUserFailure, LoginUserSuccess, UserActionTypes} from './user.actions';
import {ApplicationState} from '../index';
import {Store} from '@ngrx/store';
import {Go} from '../router/router.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<ApplicationState>
  ) {
  }

  @Effect({dispatch: false})
  loginUser$ = this.actions$.pipe(
    ofType(UserActionTypes.LoginUser),
    tap((action: any) => this.userService.login(action.payload.credential).subscribe((user) => {
      this.store.dispatch(new LoginUserSuccess(null));

      setTimeout(() => {
        this.store.dispatch(new Go({ path: ['', 'page', 'dashboard'] }));
      }, 1000);

    }, (error) => {
      this.store.dispatch(new LoginUserFailure(null));
    })),
  );

}
