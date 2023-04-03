import { globalStyle, style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../theme.css';

export const navList = style({
  margin: 0,
  padding: 0,
  listStyleType: 'none'
});

export const navGroupItem = style({});

globalStyle(`${navGroupItem} > a`, {
  fontWeight: 'bold',
  paddingLeft: vars.spacing.md,
  fontSize: vars.font.size.md
});

export const navGroup = style({
  margin: 0,
  padding: 0,
  listStyleType: 'none'
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  margin: `${vars.spacing.sm} 0`
});

export const navLink = style({
  borderRadius: '5px',
  fontSize: vars.font.size.sm,
  textDecoration: 'none',
  padding: vars.spacing.md,
  paddingLeft: vars.spacing.xl,
  color: vars.color.sidebar.link.text,
  selectors: {
    '&:hover': {
      background: vars.color.sidebar.link.hover
    }
  }
});

export const navLinkActive = style({
  background: vars.color.sidebar.active.background,
  color: vars.color.sidebar.active.text,
  selectors: {
    '&:hover': {
      background: vars.color.sidebar.active.background
    }
  }
});
