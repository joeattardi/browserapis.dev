import { globalStyle, style } from '@vanilla-extract/css';
import { theme, mediaQueries } from '../../theme';

export const layout = style({
  display: 'grid',
  gridTemplateAreas: `
    "header header"
    "sidebar main"
  `,
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: `${theme.sidebarWidth} minmax(0, 1fr)`,

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

