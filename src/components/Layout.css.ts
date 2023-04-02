import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

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
  padding: `${vars.spacing.lg} ${vars.spacing.xl}`
});

export const contentOnly = style({
  width: '80%',
  maxWidth: '1200px',
  margin: '0 auto'
});

globalStyle(`${content} h1`, {
  fontSize: vars.font.size['2xl']
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

