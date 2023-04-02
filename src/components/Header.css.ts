import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const header = style({
  gridArea: 'header',
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

export const homeLink = style({
  textDecoration: 'none',
  color: vars.color.header.text,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: 1
});

export const navList = style({
  listStyleType: 'none',
  margin: 0,
  padding: 0
});

export const navItem = style({
  display: 'flex',
  alignItems: 'center'
});

export const navLink = style({
  color: vars.color.header.text,
  textDecoration: 'none',
  fontSize: vars.font.size.sm,
});
