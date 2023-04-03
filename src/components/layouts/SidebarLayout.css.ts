import { globalStyle, style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../../theme.css';

export const layout = style({
  display: 'grid',
  gridTemplateAreas: `
    "header header"
    "sidebar main"
  `,
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: `${vars.sidebarWidth} minmax(0, 1fr)`,

  '@media': {
    [mediaQueries.small]: {
      gridTemplateAreas: `
        "header"
        "main"
      `,
      gridTemplateColumns: '1fr'
    }
  }
});

