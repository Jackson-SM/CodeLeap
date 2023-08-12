import { Action } from 'redux';

export interface UserPayload {
  username: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  PERSIST_LOGIN = 'PERSIST_LOGIN',
}

export interface ILoginAction extends Action<UserActionTypes.LOGIN> {
  payload: UserPayload;
}
export interface ILogoutAction extends Action<UserActionTypes.LOGOUT> {}

export interface IPersistLoginAction
  extends Action<UserActionTypes.PERSIST_LOGIN> {
  payload: UserPayload;
}
