import {createSelector, select} from '@ngrx/store';
import * as fromReducer from './user.reducer';
import {User} from './user.model';
import {createFeatureSelector} from '@ngrx/store';

export const getUserState = createFeatureSelector<fromReducer.State>(
  'user'
);

export const getAllUser = createSelector(
  getUserState,
  fromReducer.selectAll
);

export const userLoading = createSelector(
  getUserState,
  (userState) => userState.loading
);

export const getCurrentUser = createSelector(
  getAllUser,
  (users: User[]) => users[0]
);

export const getIsLogginState = createSelector(
  getUserState,
  (userSate) => userSate.isLoggingIn
);

export const getLoginSuccessState = createSelector(
  getUserState,
  (userSate) => userSate.loginSuccess
);


export const getLoginFailureState = createSelector(
  getUserState,
  (userSate) => userSate.loginFailure
);

