export interface PostType {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}
export interface PostPayload {
  posts: PostType[];
  loading: boolean;
  error: any;
}

export type CreatePostType = Omit<PostType, 'id' | 'created_datetime'>;

export type DeletePostType = Pick<PostType, 'id'>;

export type UpdatePostType = Omit<PostType, 'username' | 'created_datetime'>;
