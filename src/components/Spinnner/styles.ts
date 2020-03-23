import { CSSObject } from '@emotion/serialize';
import { colors, getColor } from '@src/colors/colors';
import { keyframes } from '@emotion/core';

const spinAnimation = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

export const base: CSSObject = {
    cursor: 'pointer',
    width: '25px',
    height: '25px',
    animation: 'x infinite .75s linear',
    animationName: spinAnimation,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: `${colors.grey} ${colors.grey} ${colors.grey} ${getColor('primary')}`,
    borderRadius: '100%',
};
