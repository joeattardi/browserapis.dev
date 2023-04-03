import { createTheme } from '@vanilla-extract/css';
import { theme } from './contract.css';
import { baseTheme } from './base.css';

export const darkTheme = createTheme(theme, {
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
      background: '#18181b',
      text: '#f4f4f5'
    },
    header: {
      background: '#505053',
      text: '#FFFFFF',
      link: '#ffffff',
      hover: '#68686C'
    },
    sidebar: {
      background: '#1e293b',
      border: '#BEE2EF',
      link: {
        text: '#ffffff',
        hover: '#4b5563',
      },
      active: {
        background: '#475569',
        text: '#EFF8FB'
      }
    },
    demo: {
      background: '#44403c',
      border: '#d6d3d1'
    }
  }
});
