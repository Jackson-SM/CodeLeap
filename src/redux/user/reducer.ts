import {
  ILoginAction,
  ILogoutAction,
  IPersistLoginAction,
  UserActionTypes,
  UserPayload,
} from '../../actions/userActions/actionsTypes';

const initialState: UserPayload = {
  username: '',
  isLoggedIn: false,
  isLoading: true,
};

const userReducer = (
  state = initialState,
  action: ILoginAction | ILogoutAction | IPersistLoginAction,
) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        username: '',
        isLoggedIn: false,
        isLoading: false,
      };
    case UserActionTypes.PERSIST_LOGIN:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
