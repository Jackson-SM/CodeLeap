import { Box } from '../../../../components/Box';
import { styled } from '../../../../config/stitches.config';

export const Post = styled(Box, {
  width: '752px',
  height: '316px',
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
