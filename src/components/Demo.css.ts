import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const container = style({
  padding: vars.spacing.lg
});

globalStyle(`${container} h1`, {
  fontSize: vars.font.size['2xl']
});

export const demo = style({
  marginTop: vars.spacing.lg
});