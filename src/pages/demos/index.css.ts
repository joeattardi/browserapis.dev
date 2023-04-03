import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../theme';

export const demos = style({

});

globalStyle(`${demos} h1`, {
  marginBottom: theme.spacing.xl
});

globalStyle(`${demos} img`, {
  width: '30%'
});
