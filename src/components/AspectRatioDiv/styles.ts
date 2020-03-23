import { CSSObject } from '@emotion/serialize';

export const base: (aspectRatio: number ) => CSSObject = (aspectRatio) => ({
    position: 'relative',
    width: '100%',
    paddingTop: `${1 / aspectRatio * 100}%`
});

export const content: CSSObject = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
};

/*
    Padding-bottom values for other aspect ratios and 100% width :

    aspect ratio  | padding-bottom value
    --------------|----------------------
        16:9      |       56.25%
        4:3       |       75%
        3:2       |       66.66%
        8:5       |       62.5%
*/