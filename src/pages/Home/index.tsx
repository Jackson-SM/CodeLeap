import * as Styled from './styles';
import { TitleContainer } from '../../components/TitleContainer';
import { Button } from '../../components/Button';
import { MorePosts } from '../../components/MorePosts';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions/actionCreators';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '../../components/LoadingScreen';
import { Post } from './components/Post';
import { Box } from '../../components/Box';
import { CSS, CSSProperties } from '@stitches/react';
import { PostForm } from '../../components/PostForm';
import { useCallback } from 'react';
import {
  createPost,
  getAllPosts,
} from '../../actions/postActions/actionCreators';
import { useAppSelector, usePostDispatch } from '../../redux/hooks';

const Home = () => {
  const [page, setPage] = useState(0);
  const [buttonIsDisable, setButtonIsDisable] = useState(true);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 5;

  const postDispatch = usePostDispatch();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const { posts } = useAppSelector((state) => state.post);

  const handleButtonDisable = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const buttonDisabledVerify =
      formData.get('title')?.toString().trim() === '' ||
      formData.get('content')?.toString().trim() === '';
    setButtonIsDisable(buttonDisabledVerify);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title')!.toString();
    const content = formData.get('content')!.toString();
    await postDispatch(createPost({ title, content, username: user.username }));
  };

  async function nextPage() {
    setPage((page) => page + postsPerPage);
  }

  const loadPosts = useCallback(async () => {
    await postDispatch(getAllPosts(postsPerPage, page));
  }, [postDispatch, page, postsPerPage]);

  useEffect(() => {
    (async () => {
      await loadPosts();
      setLoading(false);
    })();
  }, [loadPosts]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Styled.Home>
      <Styled.ContainerPosts>
        <TitleContainer title="CodeLeap Network" />
        <Styled.ContainerPostsContainer>
          <Box>
            <PostForm
              titleForm="What’s on your mind?"
              style={cssFormContainer}
              onSubmit={handleSubmitForm}
              onChange={handleButtonDisable}
            >
              <Button
                disabled={buttonIsDisable}
                type="submit"
                css={{ alignSelf: 'end', fontWeight: 600 }}
              >
                Create
              </Button>
            </PostForm>
          </Box>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          <MorePosts onClick={() => nextPage()} />
          <Button
            variant="warning"
            css={cssButtonSignOut}
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

const cssButtonSignOut: CSS = {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: 10,
  fontWeight: 'bold',
};

const cssFormContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: 20,
};

export default Home;
