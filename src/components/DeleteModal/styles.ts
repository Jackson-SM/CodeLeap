import { styled } from '../../config/stitches.config';

export const DeleteModal = styled('div', {
  background: '$background',
  width: '660px',
  height: '145px',

  borderRadius: '16px',

  padding: 20,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

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
  gap: 15,
  alignSelf: 'end',
});
