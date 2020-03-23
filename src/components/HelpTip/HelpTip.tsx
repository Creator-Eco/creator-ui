/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { TooltipContainer } from '../Tooltip';
import Icon from '../Icon/Icon';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip/Tooltip';
import { icon, base } from './styles';
import * as styles from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface HelpTipProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    tooltipProps?: Partial<TooltipProps>;
    text?: string;
}

const HelpTip: FC<HelpTipProps> = props => {
    const { children, text, testId, className, tooltipProps, styles: extenalStyles = {} } = props;

    function getBaseStyle() {
        return [base, extenalStyles.base];
    }

    return (
        <TooltipContainer css={getBaseStyle()} data-test={testId} className={className}>
            <Icon name="helpTip" styles={{ base: icon }} />
            <Tooltip position="top" align="center" {...tooltipProps}>
                {children || text}
            </Tooltip>
        </TooltipContainer>
    );
};

HelpTip.defaultProps = {
    testId: 'help-tip',
};

export default HelpTip;
