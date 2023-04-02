import { vars } from '../theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const demo = style({
  margin: vars.spacing.lg
});

globalStyle(`${demo} h1`, {
  fontSize: vars.font.size['2xl'],
  marginBottom: vars.spacing.lg
});
