import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';

export const base: CSSObject = {
    height: '67px',
};

export const floater: CSSObject = {
    background: colors.white,
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    height: '67px',
    borderTop: `1px solid ${colors.paleGrey}`,
    padding: '8px 16px'
};
