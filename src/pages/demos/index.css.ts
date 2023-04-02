import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const demos = style({

});

globalStyle(`${demos} h1`, {
  marginBottom: vars.spacing.xl
});

globalStyle(`${demos} img`, {
  width: '30%'
});
