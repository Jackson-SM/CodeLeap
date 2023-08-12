import { styled } from '../../config/stitches.config';

export const Home = styled('div', {
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
});

export const ContainerPosts = styled('div', {
  background: '$background',
  width: 800,
  height: 'max-content',
});

export const ContainerPostsContainer = styled('div', {
  padding: 20,

  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});
