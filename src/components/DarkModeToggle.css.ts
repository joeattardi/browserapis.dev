import { style } from '@vanilla-extract/css';
import { theme } from '../theme';

export const button = style({
  background: 'transparent',
  border: 'none',
  padding: theme.spacing.md,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  color: theme.color.header.text
});
