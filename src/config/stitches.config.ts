import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, css, theme } = createStitches({
  theme: {
    colors: {
      text: '#000000',
      background: '#FFFFFF',
      backgroundLight: '#DDDDDD',
      primary: '#7695EC',
      primaryHover: '#9BB9FF',
      warning: '#ff6363',
      warningHover: '#ff7d7d',
      success: '#47B960',
      successHover: '#63e07e',
      grey: '#CCCCCC',
      greyDark: '#858585',
    },
  },
  media: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(max-width: 1280px)',
    large: '(max-width: 1536px)',
  },
});
