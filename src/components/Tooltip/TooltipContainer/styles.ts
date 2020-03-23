import { CSSObject } from '@emotion/serialize';

export const base: CSSObject = {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'middle',
    // lineHeight: 0,
    '& .tooltip': {
        position: 'absolute',
        zIndex: 10,
        transition: 'all 300ms ease',
        visibility: 'hidden',
        opacity: 0
    },
};

export const baseVisible: CSSObject = {
    position: 'relative',
    '& .tooltip': {
        visibility: 'visible',
        opacity: 1,
    },
};
