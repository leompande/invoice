import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {User} from './user.model';

export enum UserActionTypes {
  LoginUser = '[User] Login',
  LoginUserSuccess = '[User] Login Success',
  LoginUserFailure = '[User] Login failure',
  GetUsers = '[User] Get Users',
  DoneLoadingUsers = '[User] Done loading Users',
  SetSelectedUser = '[User] Set Selected User',
  LoadUsers = '[User] Load Users',
  AddUser = '[User] Add User',
  UpsertUser = '[User] Upsert User',
  AddUsers = '[User] Add Users',
  UpsertUsers = '[User] Upsert Users',
  UpdateUser = '[User] Update User',
  UpdateUsers = '[User] Update Users',
  DeleteUser = '[User] Delete User',
  DeleteUsers = '[User] Delete Users',
  ClearUsers = '[User] Clear Users'
}

export class LoginUser implements Action {
  readonly type = UserActionTypes.LoginUser;

  constructor(public payload: { credential: { username: string; password: string } }) {
  }
}

export class LoginUserSuccess implements Action {
  readonly type = UserActionTypes.LoginUserSuccess;

  constructor(public payload: { user: User }) {
  }
}

export class LoginUserFailure implements Action {
  readonly type = UserActionTypes.LoginUserFailure;

  constructor(public payload: any) {
  }
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class DoneLoadingUsers implements Action {
  readonly type = UserActionTypes.DoneLoadingUsers;

  constructor(public payload: { users: User[] }) {
  }
}

export class SetSelectedUser implements Action {
  readonly type = UserActionTypes.SetSelectedUser;

  constructor(public payload: string) {
  }
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor(public payload: { users: User[] }) {
  }
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;

  constructor(public payload: { user: User }) {
  }
}

export class UpsertUser implements Action {
  readonly type = UserActionTypes.UpsertUser;

  constructor(public payload: { user: User }) {
  }
}

export class AddUsers implements Action {
  readonly type = UserActionTypes.AddUsers;

  constructor(public payload: { users: User[] }) {
  }
}

export class UpsertUsers implements Action {
  readonly type = UserActionTypes.UpsertUsers;

  constructor(public payload: { users: User[] }) {
  }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: { user: Update<User> }) {
  }
}

export class UpdateUsers implements Action {
  readonly type = UserActionTypes.UpdateUsers;

  constructor(public payload: { users: Update<User>[] }) {
  }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteUsers implements Action {
  readonly type = UserActionTypes.DeleteUsers;

  constructor(public payload: { ids: string[] }) {
  }
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.ClearUsers;
}

export type UserActions =
  LoginUser
  | LoginUserSuccess
  | LoginUserFailure
  | GetUsers
  | DoneLoadingUsers
  | SetSelectedUser
  | LoadUsers
  | AddUser
  | UpsertUser
  | AddUsers
  | UpsertUsers
  | UpdateUser
  | UpdateUsers
  | DeleteUser
  | DeleteUsers
  | ClearUsers;
