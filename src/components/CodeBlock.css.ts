import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const codeBlock = style({
  background: 'rgb(40, 42, 54)',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  margin: `${vars.spacing.lg} 0`
});

export const toolbar = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  justifyItems: 'start'
});

export const tag = style({
  fontSize: vars.font.size.sm,
  fontFamily: vars.font.code,
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginLeft: '0.5em',
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  background: 'red',
  color: 'white',
});

export const lang = {
  javascript: style({
    background: '#f7df1e',
    color: vars.color.body.text
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
  gap: vars.spacing.sm,
  alignItems: 'center',
  color: vars.color.white,
  selectors: {
    '&:hover': {
      background: vars.color.accent
    }
  }
});

export const copySuccess = style({
  background: vars.color.success,
  selectors: {
    '&:hover': {
      background: vars.color.success
    }
  }
});
