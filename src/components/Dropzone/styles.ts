import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';

export const base: CSSObject = {
    transition: 'all 300ms ease',
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 40px',
    background: '#f8f9fa',
    color: colors.battleshipGrey,
    borderRadius: '12px',
    border: `2px solid ${colors.battleshipGrey}`,
    borderStyle: 'dashed',
};

export const previewImage: (src: string) => CSSObject = (src) => ({
    background: `url(${src}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '12px'
});

export const baseActive: CSSObject = {
    borderColor: colors.primary,
    color: colors.primary
};

export const baseAccept: CSSObject = {
    // padding: '0px',
};

export const baseWithPreview: CSSObject = {
    padding: '0px',
};

export const selectButton: CSSObject = {

};

export const icon: CSSObject = {
    fontSize: '56px'
};

