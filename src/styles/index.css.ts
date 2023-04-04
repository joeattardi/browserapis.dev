import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../theme';

export const hero = style({
  textAlign: 'center'
});

globalStyle(`${hero} img`, {
  width: '40%'
});

globalStyle(`${hero} h1`, {
  fontSize: theme.font.size['3xl'],
  marginBottom: theme.spacing.xl
});

export const body = style({
  fontSize: theme.font.size.md
});

export const demo = style({
  margin: theme.spacing.lg
});

globalStyle(`${demo} h1`, {
  fontSize: theme.font.size['2xl'],
  marginBottom: theme.spacing.lg
});
