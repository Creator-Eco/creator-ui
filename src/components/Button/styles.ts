import { ButtonSize } from './Button';
import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';

function getHeight(size: ButtonSize): string {
    if (size == 'sm') return '33px';
    return '51px';
}
function getFontSize(size: ButtonSize): string {
    if (size == 'sm') return '14px';
    return '16px';
}

export const base: (size: ButtonSize) => CSSObject = (size) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: getHeight(size),
    fontSize: getFontSize(size),
    padding: '16px 24px',
    lineHeight: 1,
    cursor: 'pointer',
    fontWeight: 700,
    borderRadius: '12px',
    transition: 'all 300ms ease',

    background: colors.primary,
    color: colors.white,
    ':hover': {
        background: colors.slateGrey,
    },
});

export const typeStyles: { [key: string]: CSSObject } = {
    baseDanger: {
        background: colors.red,
        borderColor: colors.red,
        color: colors.white,

        ':hover': {
            background: colors.red,
            color: colors.white,
        },
    },

    baseSuccess: {
        background: colors.green,
        color: colors.white,

        ':hover': {
            background: colors.green,
            color: colors.white,
        },
    }
};

export const baseDisabled: CSSObject = {
    cursor: 'not-allowed',
    background: colors.silver2,
    color: colors.slateGrey,

    ':hover': {
        background: colors.silver2,
        color: colors.slateGrey
    },
};
export const baseOutline: CSSObject = {
    border: `2px solid ${colors.primary}`,
    background: colors.white,
    color: colors.primary,

    ':hover': {
        background: colors.primary,
        color: colors.white
    },
};

export const spinnerBase: CSSObject = {
    position: 'absolute',
    top: '50%',
    marginTop: '-8px',
    right: '8px',
    width: '16px',
    height: '16px',
};
