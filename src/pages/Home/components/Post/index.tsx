import { useSelector } from 'react-redux';
import { PostType } from '../../../../actions/postActions/postTypes';
import { LetterLight } from '../../../../components/LetterLight';
import { TitleContainer } from '../../../../components/TitleContainer';
import * as Styled from './styles';
import { AppState } from '../../../../redux/root-reducer';

type PostProps = React.ComponentProps<typeof Styled.Post> & {
  post: PostType;
};

export const Post = ({ children, post, ...props }: PostProps) => {
  const user = useSelector((state: AppState) => state.user);

  return (
    <Styled.Post {...props}>
      <TitleContainer title={post.title}>
        {user.username === post.username && (
          <>
            <span>icon</span> <span>icon</span>
          </>
        )}
      </TitleContainer>
      <Styled.PostContent>
        <Styled.TopContent>
          <LetterLight css={{ fontWeight: 700 }}>@{post.username}</LetterLight>
          <LetterLight>25 minutes ago</LetterLight>
        </Styled.TopContent>
        <Styled.Content>{post.content}</Styled.Content>
      </Styled.PostContent>
      {children}
    </Styled.Post>
  );
};
