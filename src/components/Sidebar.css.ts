import { globalStyle, style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../theme';

export const sidebar = style({
  gridArea: 'sidebar',
  background: theme.color.sidebar.background,
  borderRight: `2px solid ${theme.color.sidebar.border}`,
  padding: theme.spacing.md,

  '@media': {
    [mediaQueries.small]: {
      display: 'none'
    }
  }
});

export const navList = style({
  margin: 0,
  padding: 0,
  listStyleType: 'none'
});

export const navGroupItem = style({});

globalStyle(`${navGroupItem} > a`, {
  fontWeight: 'bold',
  paddingLeft: theme.spacing.md,
  fontSize: theme.font.size.md
});

export const navGroup = style({
  margin: 0,
  padding: 0,
  listStyleType: 'none'
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  margin: `${theme.spacing.sm} 0`
});

export const navLink = style({
  borderRadius: '5px',
  fontSize: theme.font.size.sm,
  textDecoration: 'none',
  padding: theme.spacing.md,
  paddingLeft: theme.spacing.xl,
  color: theme.color.sidebar.link.text,
  selectors: {
    '&:hover': {
      background: theme.color.sidebar.link.hover
    }
  }
});

export const navLinkActive = style({
  background: theme.color.sidebar.active.background,
  color: theme.color.sidebar.active.text,
  selectors: {
    '&:hover': {
      background: theme.color.sidebar.active.background
    }
  }
});
