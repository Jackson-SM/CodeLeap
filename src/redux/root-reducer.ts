import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import { UserPayload } from '../actions/userActions/actionsTypes';
import postReducer from './post/reducer';
import { PostPayload } from '../actions/postActions/postTypes';

export interface AppState {
  user: UserPayload;
  post: PostPayload;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
