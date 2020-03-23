import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';
import { bp } from '@src/sizes/sizes';

export const base: CSSObject = {
    background: colors.white,
    borderRadius: '12px',
    padding: '16px',

    [`@media (min-width: ${bp.md})`]: {
        padding: '16px 24px 24px 24px',
    }
};
