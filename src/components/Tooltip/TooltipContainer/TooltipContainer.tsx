/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { base, baseVisible } from './styles';
import useHover from '@src/hooks/use-hover';

export interface TooltipContainerProps {
    className?: string;
    testId?: string; // TODO - create base props and inherite from there?
}

const TooltipContainer: FC<TooltipContainerProps> = props => {
    const { testId, className, children } = props;

    const { isHovered, bindHover } = useHover();
    function getBaseStyle() {
        return [base, isHovered && baseVisible];
    }

    return (
        <div {...bindHover} css={getBaseStyle()} data-test={testId} className={className}>
            {children}
        </div>
    );
};

TooltipContainer.defaultProps = {
    testId: 'tooltip-container',
};

export default TooltipContainer;
