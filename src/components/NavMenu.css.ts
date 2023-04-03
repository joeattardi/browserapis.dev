import { globalStyle, style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../theme';

export const button = style({
  background: 'transparent',
  color: theme.color.white,
  display: 'none',

  '@media': {
    [mediaQueries.small]: {
      display: 'flex',
      alignItems: 'center'
    }
  }
});

export const menu = style({
  background: theme.color.sidebar.background,
  transform: 'translateX(-100%)',
  transformOrigin: 'top',
  opacity: 0,
  transition: 'all 200ms',
  position: 'absolute',
  height: `calc(100% - ${theme.headerHeight})`,
  top: theme.headerHeight,
  width: '100%',
  color: theme.color.body.text,
  padding: theme.spacing.md,
  right: 0,

  selectors: {
    '&.open': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
});

globalStyle(`${menu} > ul > li > a`, {
  fontSize: '1.3rem'
});

globalStyle(`${menu} > ul > li ul > li > a`, {
  fontSize: '1.15rem',
  paddingTop: theme.spacing.lg,
  paddingBottom: theme.spacing.lg  
});