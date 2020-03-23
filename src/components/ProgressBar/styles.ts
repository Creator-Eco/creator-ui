import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';

export const base: CSSObject = {
    position: 'relative',
    width: '100%',
    height: '32px',
    borderRadius: '12px',
    border: `2px solid ${colors.white2}`,
    backgroundColor: colors.white
};

export const progressFill: (progress: number) => CSSObject = (progress) => ({
    zIndex: 1,
    transition: 'all 300ms ease',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: `${progress * 100}%`,
    transform: `translate3d(${progress == 0 ? 0 : '-100%'}, 0, 0)`,
    height: '32px',
    borderRadius: '12px',
    backgroundColor: colors.white2
});

export const overlay: CSSObject = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: '12px'
};
