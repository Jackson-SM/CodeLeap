import { styled } from '../../config/stitches.config';

export const Textarea = styled('textarea', {
  resize: 'none',
  borderRadius: 8,
  padding: '5px 10px',

  outline: 'none',

  '&::placeholder': {
    color: '$grey',
  },
});
