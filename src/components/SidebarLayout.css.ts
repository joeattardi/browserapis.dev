import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const content = style({
  flexGrow: 1,
  padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
  background: '#fafafa'
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