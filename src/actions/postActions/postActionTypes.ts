import { Action } from 'redux';
import { DeletePostType, PostType } from './postTypes';

export enum PostActionTypes {
  GET_ALL_POSTS = 'GET_ALL_POSTS',
  DELETE_POST = 'DELETE_POST',
  CREATE_POST = 'CREATE_POST',
  UPDATE_POST = 'UPDATE_POST',
}

export interface IGetAllPosts extends Action<PostActionTypes.GET_ALL_POSTS> {
  payload: PostType[];
}
export interface IDeletePost extends Action<PostActionTypes.DELETE_POST> {
  payload: DeletePostType;
}

export interface ICreatePost extends Action<PostActionTypes.CREATE_POST> {
  payload: PostType;
}

export interface IUpdatePost extends Action<PostActionTypes.UPDATE_POST> {
  payload: PostType;
}

export interface PostDispatchActions {
  type: PostActionTypes;
  payload: unknown;
}
