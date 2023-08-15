import { createStore, applyMiddleware, Dispatch } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './root-reducer';
import { PostDispatchActions } from '../actions/postActions/postActionTypes';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<PostDispatchActions> &
  ThunkDispatch<RootState, null, PostDispatchActions>;
export default store;
