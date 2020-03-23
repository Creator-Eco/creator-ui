import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';
import { PopoverPosition, PopoverAlignment } from './Popover';

export const base: CSSObject = {
    position: 'relative'
};

export const content: CSSObject = {
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 150ms ease',
    pointerEvents: 'none',

    zIndex: 1,
    borderRadius: '12px',
    border: `2px solid ${colors.silver2}`,
    background: colors.white
};

export const contentVisible: CSSObject = {
    visibility: 'visible',
    opacity: 1,
    pointerEvents: 'all'
};


// TODO - share with popover
function getAbsolutePosition(pos: PopoverPosition | PopoverAlignment): string {
    if (pos == 'top') return 'bottom';
    if (pos == 'right') return 'left';
    if (pos == 'bottom') return 'top';

    return 'right';
}

export const getAlignmentStyle: (position: PopoverPosition, align: PopoverAlignment) => CSSObject = (position, align) => {
    const isHorizontal = ['top', 'bottom'].includes(position);

    if (isHorizontal && ['top', 'bottom', 'center'].includes(align)) {
        return {
            left: '50%',
            transform: 'translateX(-50%)',
            '::after': {
                // left: '50%',
                // transform: 'translateX(-50%)',
            },
        };
    }

    if (!isHorizontal && ['left', 'right', 'center'].includes(align)) {
        return {
            top: '50%',
            transform: 'translateY(-50%)',
            '::after': {
                // top: '50%',
                // transform: 'translateY(-50%)',
            },
        };
    }

    const absolutePosition = getAbsolutePosition(align);

    return {
        [absolutePosition]: '0',
        '::after': {
            // [absolutePosition]: '12px',
        },
    };
};

export const getPositionStyle: (position: PopoverPosition) => CSSObject = (position) => {
    const absolutePosition = getAbsolutePosition(position);

    return {
        [absolutePosition]: '100%',
        '::after': {
            // [position]: '100%',
            // [`border${toPascalCase(position)}Color`]: colors.primary
        },
    };
};
