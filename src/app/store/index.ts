import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import * as fromCustomer from './customer/customer.reducer';
import * as fromInvoice from './invoice/invoice.reducer';
import * as fromReceipt from './receipt/receipt.reducer';
import * as fromUser from './user/user.reducer';
import * as fromPayment from './payment/payment.reducer';
import {RouterStateUrl} from './router/router.reducer';


export interface ApplicationState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  customer: fromCustomer.State;
  invoice: fromInvoice.State;
  receipt: fromReceipt.State;
  user: fromUser.State;
  payment: fromPayment.State;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  routerReducer: fromRouter.routerReducer,
  customer: fromCustomer.reducer,
  invoice: fromInvoice.reducer,
  receipt: fromReceipt.reducer,
  user: fromUser.reducer,
  payment: fromPayment.reducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];

export const getRouteState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');


