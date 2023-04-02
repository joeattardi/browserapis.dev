import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const layout = style({
  display: 'grid',
  gridTemplateAreas: `
    "header header"
    "sidebar main"
  `,
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: `${vars.sidebarWidth} 1fr`
});

