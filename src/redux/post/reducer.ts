import {
  ICreatePost,
  IDeletePost,
  IGetAllPosts,
  IUpdatePost,
  PostActionTypes,
} from '../../actions/postActions/postActionTypes';
import { PostPayload } from '../../actions/postActions/postTypes';

const initialState: PostPayload = {
  posts: [],
  error: null,
};

const postReducer = (
  state = initialState,
  action: IGetAllPosts | IDeletePost | ICreatePost | IUpdatePost,
) => {
  switch (action.type) {
    case PostActionTypes.CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };

    case PostActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };

    case PostActionTypes.GET_ALL_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
      };

    case PostActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) => {
            if (post.id === action.payload.id) {
              return { ...post, ...action.payload };
            }
            return post;
          }),
        ],
      };

    default:
      return state;
  }
};

export default postReducer;
