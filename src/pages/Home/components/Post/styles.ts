import { Box } from '../../../../components/Box';
import { styled } from '../../../../config/stitches.config';

export const Post = styled(Box, {
  width: '100%',
  minHeight: '316px',
});
export const PostContent = styled('div', {
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});
export const TopContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const Content = styled('p', {
  width: '100%',
  overflowWrap: 'break-word',
});

export const OptionsInPost = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 25,
});
