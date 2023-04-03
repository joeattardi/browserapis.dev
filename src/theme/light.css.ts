import { createTheme } from '@vanilla-extract/css';
import { theme } from './contract.css';
import { baseTheme } from './base.css';

export const lightTheme = createTheme(theme, {
  ...baseTheme,
  color: {
    accent: '#2563eb',
    white: '#fafafa',
    success: '#16a34a',
    link: {
      base: '#4f46e5'
    },
    button: {
      default: '#cbd5e1'
    },
    body: {
      background: '#fafafa',
      text: '#52525b'
    },
    header: {
      background: '#505053',
      text: '#FFFFFF',
      link: '#ffffff',
      hover: '#68686C'
    },
    sidebar: {
      background: '#EFF8FB',
      border: '#BEE2EF',
      link: {
        text: '#0c4a6e',
        hover: '#BDDAE5',
      },
      active: {
        background: '#0c4a6e',
        text: '#EFF8FB'
      }
    },
    demo: {
      background: '#f5f5f4',
      border: '#d6d3d1'
    }
  }
});
