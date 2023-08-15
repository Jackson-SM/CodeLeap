import { Button } from '../Button';
import * as Styled from './styles';

type MorePostsProps = React.ComponentProps<typeof Styled.MorePosts>;

export const MorePosts = ({ children, ...props }: MorePostsProps) => {
  return (
    <Button {...props} css={{ width: 'auto', fontSize: '1.1rem', height: 50 }}>
      More Posts{children}
    </Button>
  );
};
