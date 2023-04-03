import { globalStyle, style } from '@vanilla-extract/css';
import { mediaQueries, theme } from '../../theme';

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
  
});

export const content = style({
  gridArea: 'main',
  padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
  overflow: 'auto',
  background: theme.color.body.background,
  color: theme.color.body.text
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
  fontSize: theme.font.size['2xl'],
  '@media': {
    [mediaQueries.small]: {
      fontSize: theme.font.size.xl
    }
  }
});

globalStyle(`${content} h2`, {
  margin: `${theme.spacing.lg} 0`
});

globalStyle(`${content} .demo`, {
  background: theme.color.demo.background,
  padding: theme.spacing.lg,
  borderRadius: '5px',
  border: `2px solid ${theme.color.demo.border}`
});

