import { globalCss } from '../config/stitches.config';

export const GlobalCss = globalCss({
  '@import':
    'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap")',

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },

  body: {
    backgroundColor: '$backgroundLight',
  },
});
