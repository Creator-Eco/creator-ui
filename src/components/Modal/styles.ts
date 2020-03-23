import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';
import { ModalSize } from './Modal';
import { bp } from '@src/sizes/sizes';

const CONTENT_X_PADDING = 24;

function getMaxWidth(size: ModalSize): string {
    if (size == 'sm') return '576px';
    if (size == 'md') return '768px';
    if (size == 'lg') return '992px';
    if (size == 'xl') return '1200px';
    if (size == 'auto') return 'auto';

    return '50%';
}

function getContentMaxWidth(size: ModalSize): string {
    if (size == 'sm') return `${376 + (CONTENT_X_PADDING * 2)}px`;

    return 'auto';
}

export const base: CSSObject = { // https://stackoverflow.com/questions/59272838/emotion-pass-style-object-to-external-library/59273123#59273123
    '& .popup-content': {
        minHeight: '100%',
        [`@media (min-width: ${bp.md})`]: {
            minHeight: 'auto'
        }
    }
};

export const popupContent: (size: ModalSize) => React.CSSProperties = (size) => ({
    padding: 0,
    border: 'none',
    borderRadius: '8px',
    width: size == 'auto' ? 'auto' : '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.16)',
    maxWidth: getMaxWidth(size),
});

export const content: (size: ModalSize) => CSSObject = (size) => ({
    maxWidth: getContentMaxWidth(size),
    padding: `0 ${CONTENT_X_PADDING}px`,
    margin: '0 auto'
});

export const header: CSSObject = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1,
    paddingTop: '50px',
    borderRadius: '8px 8px 0px 0px',
    color: colors.primary
};

export const footer: CSSObject = {
    paddingBottom: '50px'
};

export const closeBtn: CSSObject = {
    color: colors.primary,
    cursor: 'pointer',
    position: 'absolute',
    right: '24px',
    top: '24px',
    fontSize: '16px'
};

export const overlay: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.6)',
    overflow: 'auto'
};