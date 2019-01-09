import {createSelector, select} from '@ngrx/store';
import * as fromReducer from './customer.reducer';
import {Customer} from './customer.model';
import {createFeatureSelector} from '@ngrx/store';

export const getCustomerState = createFeatureSelector<fromReducer.State>(
  'customer'
);

export const getAllCustomer = createSelector(
  getCustomerState,
  fromReducer.selectAll
);

export const customerLoading = createSelector(
  getCustomerState,
  (customerState) => customerState.loading
);

export const getCurrentCustomer = createSelector(
  getAllCustomer,
  (customers: Customer[]) => customers[0]
);
//
// export const getIsLogginState = createSelector(
//   getCustomerState,
//   (customerSate) => customerSate.isLoggingIn
// );
//
// export const getLoginSuccessState = createSelector(
//   getCustomerState,
//   (customerSate) => customerSate.loginSuccess
// );
//
//
// export const getLoginFailureState = createSelector(
//   getCustomerState,
//   (customerSate) => customerSate.loginFailure
// );

