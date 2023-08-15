import { styled } from '../../config/stitches.config';

export const UpdateModal = styled('div', {
  width: 660,

  transform: 'translateY(-25px)',
  transition: 'transform ease 0.5s',

  variants: {
    open: {
      true: {
        transform: 'translateY(0)',
      },
    },
  },
});

export const ButtonOptions = styled('div', {
  display: 'flex',
  alignSelf: 'end',
  gap: 15,
});
