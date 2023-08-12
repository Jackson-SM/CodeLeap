import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import { UserPayload } from '../actions/userActions/actionsTypes';

export interface AppState {
  user: UserPayload;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
