import { styled } from '../../config/stitches.config';

export const Modal = styled('div', {
  position: 'fixed',

  width: '100%',
  height: '100%',

  background: 'rgba(119, 119, 119, 0.8)',

  top: 0,
  left: 0,

  opacity: 0,
  pointerEvents: 'none',

  transition: 'opacity ease 0.2s',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
});
