import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    header: {
      background: '#505053',
      text: '#FFFFFF'
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
  },
  font: {
    size: {
      sm: '16px',
      md: '18px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px'
    }
  },
  spacing: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem'
  },
  sidebarWidth: '18rem'
});
