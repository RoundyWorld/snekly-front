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
        text:{
          primary: 'var(--snekly-secondary)',
          secondary: 'var(--snekly-primary)',
        },
        // The best part is that you can refer to the variables wherever you like 🤩

      },
    },
    dark: {
      palette: {
        text:{
          primary: 'var(--snekly-secondary)',
          secondary: 'var(--snekly-primary)',
        },
    },
  },
}});


