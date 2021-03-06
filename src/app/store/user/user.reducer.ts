import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {User} from './user.model';
import {UserActions, UserActionTypes} from './user.actions';

export interface State extends EntityState<User> {
  selected: string;
  loading: boolean;
  loaded: boolean;
  isLoggingIn: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;

}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  selected: null,
  loading: false,
  loaded: false,
  isLoggingIn: false,
  loginSuccess: false,
  loginFailure: false
});

export function reducer(
  state = initialState,
  action: UserActions
): State {
  switch (action.type) {
    case UserActionTypes.LoginUser: {
      console.log(action.payload);
      return {
        ...state,
        isLoggingIn: true,
        loginSuccess: false,
        loginFailure: false,
      };
    }
    case UserActionTypes.LoginUserSuccess: {
      return {
        ...state,
        isLoggingIn: false,
        loginSuccess: true,
        loginFailure: false,
      };
    }

    case UserActionTypes.LoginUserFailure: {
      return {
        ...state,
        isLoggingIn: false,
        loginSuccess: false,
        loginFailure: true,
      };
    }

    case UserActionTypes.AddUser: {
      return adapter.addOne(action.payload.user, state);
    }

    case UserActionTypes.UpsertUser: {
      return adapter.upsertOne(action.payload.user, state);
    }

    case UserActionTypes.AddUsers: {
      return adapter.addMany(action.payload.users, state);
    }

    case UserActionTypes.UpsertUsers: {
      return adapter.upsertMany(action.payload.users, state);
    }

    case UserActionTypes.UpdateUser: {
      return adapter.updateOne(action.payload.user, state);
    }

    case UserActionTypes.UpdateUsers: {
      return adapter.updateMany(action.payload.users, state);
    }

    case UserActionTypes.DeleteUser: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserActionTypes.DeleteUsers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserActionTypes.LoadUsers: {
      return adapter.addAll(action.payload.users, state);
    }

    case UserActionTypes.ClearUsers: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
//
// export const getLogginState = (state: State) => state.isLoggingIn;
// export const getLogginState = (state: State) => state.loginSuccess;
// export const getLogginState = (state: State) => state.isLoggingIn;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
