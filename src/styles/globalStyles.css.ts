import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../theme';

globalStyle('html, body', {
  margin: 0,
  fontFamily: 'Rubik',
  height: '100%',
  color: theme.color.body.text
});

globalStyle('*', {
  boxSizing: 'border-box'
});

globalStyle('#___gatsby, #gatsby-focus-wrapper', {
  height: '100%'
});

globalStyle('h1, h2, h3, h4', {
  margin: 0,
  fontFamily: 'Domine'
});

globalStyle('a', {
  color: theme.color.link.base
});

globalStyle('.formField', {
  display: 'flex',
  flexDirection: 'column',
  margin: `${theme.spacing.md} 0`
});

globalStyle('.formField label', {
  fontSize: '0.95em',
  fontWeight: 'bold',
  marginBottom: '0.5em',
  color: theme.color.body.text
});

globalStyle('button', {
  padding: '0.5em 1em',
  background: theme.color.button.default,
  border: 'none',
  fontSize: '1rem',
  borderRadius: '0.25em',
  cursor: 'pointer'
});

export const demoHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const fullscreenLink = style({
  padding: theme.spacing.sm,
  color: theme.color.body.text,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

globalStyle(`${fullscreenLink} svg`, {
  marginLeft: theme.spacing.sm
});
