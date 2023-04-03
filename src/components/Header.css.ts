import { style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../theme';

export const header = style({
  gridArea: 'header',
  fontFamily: 'Rubik',
  fontWeight: 500,
  height: theme.headerHeight,
  background: theme.color.header.background,
  color: theme.color.header.text,
  fontSize: theme.font.size.lg,
  padding: theme.spacing.lg,
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
});

export const logoIcon = style({
  marginRight: theme.spacing.md
});

export const homeLink = style({
  textDecoration: 'none',
  color: theme.color.header.text,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifySelf: 'start'
});

export const nav = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

export const navList = style({
  listStyleType: 'none',
  margin: 0,
  padding: 0,

  '@media': {
    [mediaQueries.small]: {
      display: 'none'
    }
  }
});

export const navItem = style({
  display: 'flex',
  alignItems: 'center'
});

export const navLink = style({
  color: theme.color.header.text,
  textDecoration: 'none',
  fontSize: theme.font.size.sm,
  padding: theme.spacing.md,
  borderRadius: '5px',
  selectors: {
    '&:hover': {
      background: theme.color.header.hover
    }
  }
});
