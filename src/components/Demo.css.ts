import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../theme';

export const container = style({
  padding: theme.spacing.lg
});

globalStyle(`${container} h1`, {
  fontSize: theme.font.size['2xl']
});

export const demo = style({
  marginTop: theme.spacing.lg
});