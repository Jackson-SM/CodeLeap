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
});
