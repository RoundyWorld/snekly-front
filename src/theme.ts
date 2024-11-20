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
        primary: {
          main: '#6ea7dc',
          contrastText: '#005ba6',
        },
        secondary: {
          main: '#6ea7dc',
          contrastText: '#005ba6',
        },
        info: {
          main: '#6ea7dc',
          contrastText: '#005ba6',
        },
        background: {
          default: 'var(--background)',
          defaultChannel: 'var(--backgroxund)',
          paper: 'var(--background-secondary)',
          paperChannel: 'var(--background-secondary)',
        },
        text:{
          primary: 'var(--foreground)',
          primaryChannel: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
          secondaryChannel: 'var(--foreground-secondary)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#fc0303',
          contrastText: '#45fc03',
        },
        secondary: {
          main: '#df03fc',
          contrastText: '#0349fc',
        },
        info: {
          main: '#6ea7dc',
          contrastText: '#005ba6',
        },
        background: {
          default: 'var(--background)',
          defaultChannel: 'var(--background)',
          paper: 'var(--background-secondary)',
          paperChannel: 'var(--background-secondary)',
        },
        text:{
          primary: 'var(--foreground)',
          primaryChannel: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
          secondaryChannel: 'var(--foreground-secondary)',
        },
    },
  },
}});


