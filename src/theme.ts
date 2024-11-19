'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: 'var(--background)',
          paper: 'var(--background-secondary)',
        },
        text:{
          primary: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: 'var(--background)',
          paper: 'var(--background-secondary)',
        },
        text:{
          primary: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
        },
    },
  },
}});


