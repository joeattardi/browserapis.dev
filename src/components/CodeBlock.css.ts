import { style } from '@vanilla-extract/css';
import { theme } from '../theme';

export const codeBlock = style({
  background: 'rgb(40, 42, 54)',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  margin: `${theme.spacing.lg} 0`
});

export const toolbar = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  justifyItems: 'start'
});

export const tag = style({
  fontSize: theme.font.size.sm,
  fontFamily: theme.font.code,
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginLeft: '0.5em',
  padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
  background: 'red',
  color: 'white',
});

export const lang = {
  javascript: style({
    background: '#f7df1e',
    color: theme.color.body.text
  }),

  css: style({
    background: '#264de4'
  }),

  html: style({
    background: '#e34c26'
  })
};

export const copyButton = style({
  transition: 'background 250ms',
  background: 'transparent',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: theme.spacing.sm,
  alignItems: 'center',
  color: theme.color.white,
  selectors: {
    '&:hover': {
      background: theme.color.accent
    }
  }
});

export const copySuccess = style({
  background: theme.color.success,
  selectors: {
    '&:hover': {
      background: theme.color.success
    }
  }
});
