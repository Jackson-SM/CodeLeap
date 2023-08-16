import { globalCss } from '../config/stitches.config';

export const GlobalCss = globalCss({
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Manrope&family=Roboto&display=swap")',
  ],

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
    fontWeight: 400,

    '@mobile': {
      fontSize: '98%',
    },
  },

  body: {
    backgroundColor: '$backgroundLight',
  },
});
