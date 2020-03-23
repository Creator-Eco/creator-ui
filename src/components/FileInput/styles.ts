import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';

export const base: CSSObject = {
};

export const dropzone: CSSObject = {
    padding: 0,
    width: '133px',
    height: '75px'
};
export const dropzoneWithError: CSSObject = {
    borderColor: colors.red
};

export const dropzoneSelectButton: CSSObject = {
    position: 'absolute',
    right: '-16px',
    transform: 'translate(100%)'
};
