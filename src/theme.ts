import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#ffe5ec',
    100: '#ffb3c6',
    200: '#ff8fab',
    300: '#fb6f92',
    400: '#ffb347',
    500: '#ffd166',
    600: '#06d6a0',
    700: '#118ab2',
    800: '#073b4c',
    900: '#22223b',
  },
  accent: {
    100: '#f7fff7',
    200: '#caffbf',
    300: '#9bf6ff',
    400: '#bdb2ff',
    500: '#ffc6ff',
  },
};

const fonts = {
  heading: `'Fredoka One', system-ui, sans-serif`,
  body: `'Quicksand', system-ui, sans-serif`,
};

const theme = extendTheme({ config, colors, fonts });

export default theme; 