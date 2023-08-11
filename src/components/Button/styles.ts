import { styled } from '../../config/stitches.config';

export const Button = styled('button', {
  width: '111px',
  height: '32px',
  borderRadius: '8px',

  border: 'none',
  outline: 'none',
  background: '$primary',

  cursor: 'pointer',

  color: '#FFFFFF',

  '&[disabled]': {
    background: '$grey',
    cursor: 'default',
  },
});
