import { CSSObject } from '@emotion/serialize';
import { colors } from '@src/colors/colors';
import { TooltipPosition, TooltipAlignment } from './Tooltip';

// interface Bahi {
//   [alla:string]: CSSObject| {(): CSSObject}
// }
export const base: CSSObject = {
    label: 'tooltip',
    display: 'inline-block',
    width: 'auto',
    textAlign: 'left',
    background: colors.primary,
    color: colors.white,
    fontSize: '12px',
    fontWeight: 700,
    borderRadius: '12px',
    padding: '8px',
    '::after': {
        // display: 'block',
        // content: '""',
        // width: 0,
        // height: 0,
        // position: 'absolute',
        // border: '7px solid transparent',
    },
};

export const baseMultiline: CSSObject = {
    maxWidth: '280px',
    minWidth: '230px'
};


// TODO - share with popover
function getAbsolutePosition(pos: TooltipPosition | TooltipAlignment): string {
    if (pos == 'top') return 'bottom';
    if (pos == 'right') return 'left';
    if (pos == 'bottom') return 'top';

    return 'right';
}

export const getAlignmentStyle: (position: TooltipPosition, align: TooltipAlignment) => CSSObject = (position, align) => {
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

export const getPositionStyle: (position: TooltipPosition) => CSSObject = (position) => {
    const absolutePosition = getAbsolutePosition(position);

    return {
        [absolutePosition]: '100%',
        '::after': {
            // [position]: '100%',
            // [`border${toPascalCase(position)}Color`]: colors.primary
        },
    };
};
