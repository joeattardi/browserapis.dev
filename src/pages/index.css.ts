import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const hero = style({
  textAlign: 'center'
});

globalStyle(`${hero} img`, {
  width: '40%'
});

globalStyle(`${hero} h1`, {
  fontSize: vars.font.size['3xl'],
  marginBottom: vars.spacing.xl
});

export const body = style({
  fontSize: vars.font.size.md
});
