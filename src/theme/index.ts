import {createTheme, createBox, createText} from '@shopify/restyle';

const palette = {
  light: '#8C6FF7',
  purplePrimary: '#d3d3d3',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    light: palette.white,
    primary: palette.greenPrimary,
    secondary: palette.greenLight,
    background: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    boldTitle: {
      fontWeight: 'bold',
      fontSize: 26,
    },
    title: {
      fontSize: 26,
    },
    body: {
      fontSize: 24,
    },
    secondary: {
      color: 'background',
      fontSize: 18,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

const Box = createBox<Theme>();
const Text = createText<Theme>();

export {Box, Text};
export default theme;
