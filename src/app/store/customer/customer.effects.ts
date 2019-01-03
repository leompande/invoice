import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import {CustomerActionTypes} from './customer.actions';
import {CustomerService} from '../../services/customer.service';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {
  }

  @Effect({dispatch: false})
  loadCustomers$ = this.actions$.pipe(
    ofType(CustomerActionTypes.GetCustomers),
    tap(() => this.customerService.getCustomers()),
  );

}
