import { CSSObject } from '@emotion/serialize';
import { bp } from '@src/sizes/sizes';

export const base: CSSObject = {

};

export const stats: CSSObject = {
    [`@media (min-width: ${bp.md})`]: {
        maxWidth: '576px'
    }
};
