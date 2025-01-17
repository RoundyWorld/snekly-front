'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const sneklyPrimary = '#6ea7dc';
export const sneklySecondary = '#005ba6';
const sneklyPink = '#CD8987';
// const sneklyPalePink = '#CDACA1';
export const sneklyLicorice = '#1F0812';
// const sneklyYellow = '#FFC145';
export const sneklyOrange = '#DE6B48';

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
          main: sneklyPink,
          contrastText: 'var(--background)',
        },
        secondary: {
          main: '#6ea7dc',
          contrastText: '#005ba6',
        },
        info: {
          main: sneklySecondary,
          contrastText: sneklyPrimary,
        },
        background: {
          default: 'var(--background)',
          defaultChannel: 'var(--background)',
          paper: 'var(--background-secondary)',
          paperChannel: 'var(--background-secondary)',
        },
        text: {
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
          main: sneklyPink,
          contrastText: 'var(--foreground)',
        },
        secondary: {
          main: '#df03fc',
          contrastText: '#0349fc',
        },
        info: {
          main: sneklyPrimary,
          contrastText: sneklySecondary,
        },
        background: {
          default: 'var(--background)',
          defaultChannel: 'var(--background)',
          paper: 'var(--background-secondary)',
          paperChannel: 'var(--background-secondary)',
        },
        text: {
          primary: 'var(--foreground)',
          primaryChannel: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
          secondaryChannel: 'var(--foreground-secondary)',
        },
      },
    },
  },
});


