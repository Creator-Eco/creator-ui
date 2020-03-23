import { CSSObject } from '@emotion/serialize';
import { colors, getColor } from '@src/colors/colors';

export const base: CSSObject = {
    width: '100%',
    transition: 'border-color 300ms ease, color 300ms ease',
    padding: '16px',
    color: colors.primary,
    border: `2px solid ${colors.silver2}`,
    borderRadius: '12px',
    fontSize: '16px',
    ':focus': {
        borderColor: getColor('primary'),
        color: colors.primary
    }
};

export const baseDisabled: CSSObject = {
    color: colors.grey,
    border: `2px solid ${colors.silver}`,
    background: colors.silver2,
    ':focus': {
        color: colors.grey,
        border: `2px solid ${colors.silver}`
    }
};

export const baseError: CSSObject = {
    border: `2px solid ${colors.red}`,
    ':focus': {
        border: `2px solid ${colors.red}`
    }
};
