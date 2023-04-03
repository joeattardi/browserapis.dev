import { globalStyle, style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../theme.css';

export const button = style({
  background: 'transparent',
  color: vars.color.white,
  display: 'none',

  '@media': {
    [mediaQueries.small]: {
      display: 'flex',
      alignItems: 'center'
    }
  }
});

export const menu = style({
  background: vars.color.sidebar.background,
  transform: 'translateX(100%)',
  transformOrigin: 'top',
  opacity: 0,
  transition: 'all 200ms',
  position: 'absolute',
  height: `calc(100% - ${vars.headerHeight})`,
  top: vars.headerHeight,
  width: '100%',
  color: vars.color.body.text,
  padding: vars.spacing.md,
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
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg  
});