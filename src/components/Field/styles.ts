import { CSSObject } from '@emotion/core';
import { colors } from '@src/colors/colors';

export const base: CSSObject = {
    position: 'relative'
};

export const errorCode: CSSObject = {
    position: 'absolute',
    top: '100%',
    left: '16px',
    color: colors.red,
    fontSize: '12px'
};

export const folatingInputLabel: CSSObject = {
    position: 'absolute',
    right: '16px',
    bottom: '18px',
    color: colors.grey,
    fontSize: '12px',
    textTransform: 'uppercase',
    background: colors.white
};