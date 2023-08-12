import * as Styled from './styles';

type MorePostsProps = React.ComponentProps<typeof Styled.MorePosts>;

export const MorePosts = ({ children, ...props }: MorePostsProps) => {
  return <Styled.MorePosts {...props}>More Posts{children}</Styled.MorePosts>;
};
