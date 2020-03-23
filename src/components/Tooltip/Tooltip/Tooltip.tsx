/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { base, getPositionStyle, getAlignmentStyle, baseMultiline } from './styles';

export type TooltipAlignment = 'bottom' | 'left' | 'top' | 'right' | 'center';
export type TooltipPosition = 'bottom' | 'left' | 'top' | 'right';

export interface TooltipProps {
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
    enableMultiLine?: boolean;
    align: TooltipAlignment;
    position: TooltipPosition;
}

const Tooltip: FC<TooltipProps> = props => {
    const { testId, className, children } = props;

    function getBaseStyle() {
        const { enableMultiLine = false, position, align } = props;

        const alignmentStyles = getAlignmentStyle(position, align);
        const positionStyles = getPositionStyle(position);

        return [base, enableMultiLine && baseMultiline, alignmentStyles, positionStyles];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={`tooltip ${className}`}>
            {children}
        </div>
    );
};

Tooltip.defaultProps = {
    testId: 'tooltip',
};

export default Tooltip;
