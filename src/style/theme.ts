export const color = {
  factor: {
    status: {
      background: '#31BCFF',
      color: '#F2F2F2',
    },
    appropriate: {
      background: '#FF77B3',
      color: '#F2F2F2',
    },
    uniqueSkill: { background: '#8ECC2A', color: '#FFFFFF' },
    G1: { background: '#E1E1E1', color: '#75421D' },
    skill: { background: '#E1E1E1', color: '#75421D' },
  },
};

// type colors = typeof colors[keyof typeof colors];

export const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

// type typography = typeof typography[keyof typeof typography];

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
};

// type fontSizes = typeof fontSizes[keyof typeof fontSizes];

export const sizes = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  largeSizes: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
  },
  container: {
    sm: '560px',
    md: '960px',
    lg: '1024px',
    xl: '1280px',
  },
};

// type sizes = typeof sizes[keyof typeof sizes];

// breakpointsの設定
// example
// [mq[1]]:{
// color: red;
// }
const breakpoints = [560, 960, 1024, 1280];

export const mq = breakpoints.map((bp) => `@media(max-width: ${bp}px)`);
