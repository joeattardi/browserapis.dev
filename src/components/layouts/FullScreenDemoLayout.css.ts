import { theme } from '../../theme';
import { globalStyle, style } from '@vanilla-extract/css';

export const demo = style({
  margin: theme.spacing.lg
});

globalStyle(`${demo} h1`, {
  fontSize: theme.font.size['2xl'],
  marginBottom: theme.spacing.lg
});
