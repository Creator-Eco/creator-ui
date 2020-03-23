import { CSSObject } from '@emotion/serialize';

export const base: CSSObject = {
    display: 'block'
};

export const image: (src: string) => CSSObject = (src) => ({
    background: `url(${src}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '40px',
    height: '40px',
    borderRadius: '100%'
});
