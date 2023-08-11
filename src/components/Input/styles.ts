import { styled } from '../../config/stitches.config';

export const Input = styled('input', {
  border: '1px solid $greyDark',
  borderRadius: '8px',
  height: '32px',
  padding: 10,
  outline: 'none',

  '&::placeholder': {
    color: '$grey',
  },
});
