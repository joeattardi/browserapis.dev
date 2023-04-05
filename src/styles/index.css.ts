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
  marginTop: theme.spacing.xl,
  marginBottom: theme.spacing.xl
});

export const body = style({
  fontSize: theme.font.size.md
});

export const demo = style({
  margin: theme.spacing.lg,
});

export const demoContent = style({
  fontFamily: 'Rubik'
})

globalStyle(`${demoContent} *`, {
  fontFamily: 'Rubik'
});

globalStyle(`${demo} h1`, {
  fontSize: theme.font.size['2xl'],
  marginBottom: theme.spacing.lg
});
