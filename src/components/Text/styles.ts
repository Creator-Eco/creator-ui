import { CSSObject } from '@emotion/serialize';

export const base: CSSObject = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    // overflow: 'hidden',
    lineHeight: 1
};

export const baseMultiline: CSSObject = {
    lineHeight: '1.5',
    whiteSpace: 'pre-line',
    wordBreak: 'break-word',
    wordWrap: 'break-word'
};

export const baseLineClamp: (lineClamp: number) => CSSObject = lineClamp => ({
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
});

