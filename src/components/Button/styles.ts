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

  transition: 'background 0.15s ease',

  defaultVariants: {
    variant: 'primary',
  },

  '&[disabled]': {
    background: '$grey',
    cursor: 'default',
    '&:hover': {
      background: '$grey',
    },
  },

  variants: {
    variant: {
      primary: {
        background: '$primary',
        '&:hover': {
          background: '$primaryHover',
        },
      },
      warning: {
        background: '$warning',
        '&:hover': {
          background: '$warningHover',
        },
      },
      success: {
        background: '$success',
        '&:hover': {
          background: '$successHover',
        },
      },
      outline: {
        background: 'transparent',
        border: '1px solid $text',
        color: '$text',
        '&:hover': {
          background: '$backgroundLight',
        },
      },
    },
  },
});
