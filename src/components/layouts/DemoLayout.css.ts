import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../../theme';

export const demoHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const fullscreenLink = style({
  padding: `0 ${theme.spacing.sm}`,
  color: theme.color.body.text,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

globalStyle(`${fullscreenLink} svg`, {
  marginLeft: theme.spacing.sm
})