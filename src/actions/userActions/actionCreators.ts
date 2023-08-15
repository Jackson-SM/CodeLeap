import { UserActionTypes } from './actionsTypes';

export const login = (username: string) => {
  localStorage.setItem('user', JSON.stringify({ username, isLoggedIn: true }));

  return {
    type: UserActionTypes.LOGIN,
    payload: { username, isLoggedIn: true },
  };
};
export const logout = () => {
  const user = localStorage.getItem('user');

  if (user) {
    localStorage.removeItem('user');
  }

  return {
    type: UserActionTypes.LOGOUT,
  };
};
export const persistLogin = () => {
  const user = localStorage.getItem('user');

  if (user) {
    return {
      type: UserActionTypes.LOGIN,
      payload: JSON.parse(user),
    };
  }

  return {
    type: UserActionTypes.LOGOUT,
  };
};
