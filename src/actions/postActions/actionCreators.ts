import { baseUrl } from '../../config/api.config';
import { PostActionTypes } from './postActionTypes';
import {
  CreatePostType,
  DeletePostType,
  PostType,
  UpdatePostType,
} from './postTypes';
import { AppDispatch } from '../../redux/store';

export const createPost =
  (data: CreatePostType) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataResponse: PostType = await response.json();

      dispatch({
        type: PostActionTypes.CREATE_POST,
        payload: dataResponse,
      });
    } catch (error) {
      dispatch({
        type: PostActionTypes.CREATE_POST,
        payload: {
          posts: [],
        },
      });
    }
  };

//

export const deletePost =
  (data: DeletePostType) => async (dispatch: AppDispatch) => {
    try {
      await fetch(`${baseUrl}${data.id}/`, {
        method: 'DELETE',
      });

      dispatch({
        type: PostActionTypes.DELETE_POST,
        payload: {
          id: data.id,
        },
      });
    } catch (err) {
      dispatch({
        type: PostActionTypes.DELETE_POST,
        payload: {
          posts: [],
          error: 'Erro inesperado',
        },
      });
    }
  };

export const getAllPosts =
  (limit?: number, offset?: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `${baseUrl}/?limit=${limit ?? 5}&offset=${offset ?? 0}`,
      );

      const data = await response.json();

      dispatch({
        type: PostActionTypes.GET_ALL_POSTS,
        payload: {
          posts: data.results,
          error: null,
        },
      });
    } catch (err) {
      dispatch({
        type: PostActionTypes.GET_ALL_POSTS,
        payload: {
          posts: [],
          error: 'Erro inesperado',
        },
      });
    }
  };

export const updatePost =
  (data: UpdatePostType) => async (dispatch: AppDispatch) => {
    try {
      await fetch(`${baseUrl}${data.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: data.title, content: data.content }),
      });

      dispatch({
        type: PostActionTypes.UPDATE_POST,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PostActionTypes.GET_ALL_POSTS,
        payload: {
          posts: [],
        },
      });
    }
  };
