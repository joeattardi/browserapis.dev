import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
});

export const header = style({
  fontFamily: 'Rubik',
  fontWeight: 500,
  background: vars.color.header.background,
  color: vars.color.header.text,
  fontSize: vars.font.size.lg,
  padding: vars.spacing.lg,
  display: 'flex',
  alignItems: 'center'
});

export const logoIcon = style({
  marginRight: vars.spacing.md
});

export const main = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row'
});
