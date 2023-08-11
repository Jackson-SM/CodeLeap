import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, css, theme } = createStitches({
  theme: {
    colors: {
      background: '#FFFFFF',
      backgroundLight: '#DDDDDD',
      primary: '#7695EC',
      warning: '#FF5151',
      Success: '#47B960',
    },
  },
  media: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(max-width: 1280px)',
    large: '(max-width: 1536px)',
  },
});
