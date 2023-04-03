import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
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
  },
  font: {
    code: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    size: {
      sm: '16px',
      md: '18px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px',
      '3xl': '64px'
    }
  },
  spacing: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem'
  },
  sidebarWidth: '18rem',
  headerHeight: '5.5rem'
});

export const mediaQueries = {
  small: 'screen and (max-width: 768px)'
}
