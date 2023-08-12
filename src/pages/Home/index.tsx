import * as Styled from './styles';
import { TitleContainer } from '../../components/TitleContainer';
import { Box } from '../../components/Box';
import { TitleText } from '../../components/TitleText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FieldInput } from '../../components/FieldInput';
import { CSS } from '@stitches/react';
import { Textarea } from '../../components/Textarea';
import { Post } from './components/Post';
import { MorePosts } from '../../components/MorePosts';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions/actionCreators';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Styled.Home>
      <Styled.ContainerPosts>
        <TitleContainer title="CodeLeap Network" />
        <Styled.ContainerPostsContainer>
          <Box css={cssBoxContainer}>
            <TitleText>What's on your mind?</TitleText>

            <FieldInput>
              <span>Title</span>
              <Input type="text" placeholder="Hello world" />
            </FieldInput>

            <FieldInput>
              <span>Content</span>
              <Textarea cols={20} rows={4} placeholder="Content here" />
            </FieldInput>

            <Button css={{ alignSelf: 'end', fontWeight: 600 }}>Create</Button>
          </Box>
          <Post />
          <Post />
          <Post />
          <MorePosts />
          <Button
            variant="warning"
            css={{
              position: 'fixed',
              top: 0,
              right: 0,
              margin: 20,
              fontWeight: 'bold',
            }}
            onClick={() => {
              dispatch(logout());
            }}
          >
            SignOut
          </Button>
        </Styled.ContainerPostsContainer>
      </Styled.ContainerPosts>
    </Styled.Home>
  );
};

const cssBoxContainer: CSS = {
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

export default Home;
