import { globalStyle, style } from '@vanilla-extract/css';
import { mediaQueries, vars } from '../../theme.css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
});

export const main = style({
  gridArea: 'main',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  background: vars.color.body.background
});

export const content = style({
  gridArea: 'main',
  padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
  overflow: 'auto'
});

export const contentOnly = style({
  width: '80%',
  maxWidth: '1200px',
  margin: '0 auto',

  '@media': {
    [mediaQueries.small]: {
      width: '100%',
      maxWidth: '100%'
    }
  }
});

globalStyle(`${content} h1`, {
  fontSize: vars.font.size['2xl'],
  '@media': {
    [mediaQueries.small]: {
      fontSize: vars.font.size.xl
    }
  }
});

globalStyle(`${content} h2`, {
  margin: `${vars.spacing.lg} 0`
});

globalStyle(`${content} .demo`, {
  background: vars.color.demo.background,
  padding: vars.spacing.lg,
  borderRadius: '5px',
  border: `2px solid ${vars.color.demo.border}`
});

