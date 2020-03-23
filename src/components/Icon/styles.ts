import { CSSObject } from '@emotion/serialize';

export const base: CSSObject = {
    display: 'inline-flex',
    position: 'relative',
};

export const svg: CSSObject = {
    pointerEvents: 'none',
    fill: 'currentColor',
    width: '1em',
    height: '1em',
};

export const svgBaseline: CSSObject = {
    bottom: '-0.125em',
    position: 'absolute',
};
