import { styled, keyframes } from '../../../../config/stitches.config';
import { Box } from '../../../../components/Box';

const animationShowSignup = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

export const SignUpComponent = styled(Box, {
  width: '500px',
  height: '190px',
  padding: 20,

  animation: `${animationShowSignup} ease 1.5s forwards`,

  display: 'flex',
  flexDirection: 'column',
});
