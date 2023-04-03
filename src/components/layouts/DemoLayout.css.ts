import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const demoHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const fullscreenLink = style({
  padding: vars.spacing.sm,
  color: vars.color.body.text,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

globalStyle(`${fullscreenLink} svg`, {
  marginLeft: vars.spacing.sm
})